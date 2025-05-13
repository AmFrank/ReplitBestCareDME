import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, loginSchema } from "@shared/schema";
import session from "express-session";
import MemoryStore from "memorystore";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'bestcaredme-secret-key';
const SESSION_SECRET = process.env.SESSION_SECRET || 'bestcaredme-session-secret';

// Function to send email notifications for new submissions
const sendEmailNotification = async (submission: any) => {
  // In a real app, this would use an email service like nodemailer
  console.log(`Email notification for submission: ${submission.id} from ${submission.firstName} ${submission.lastName}`);
  // Mark as notified in the database
  await storage.updateSubmissionNotified(submission.id, true);
};

// Function to sync with Google Sheets
const syncWithGoogleSheets = async (submission: any) => {
  // In a real app, this would use the Google Sheets API
  console.log(`Syncing submission ${submission.id} to Google Sheets`);
  // Mark as synced in the database
  await storage.updateSubmissionSheetSynced(submission.id, true);
};

// Authentication middleware
const authenticate = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure session management
  const MemoryStoreInstance = MemoryStore(session);
  app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MemoryStoreInstance({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    cookie: { 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.createSubmission(validatedData);
      
      // Send email notification and sync with Google Sheets (async operations)
      sendEmailNotification(submission).catch(err => 
        console.error('Failed to send email notification:', err)
      );
      
      syncWithGoogleSheets(submission).catch(err => 
        console.error('Failed to sync with Google Sheets:', err)
      );
      
      res.status(201).json({ 
        message: 'Contact form submitted successfully',
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: 'Validation error', 
          errors: validationError.details 
        });
      } else {
        console.error('Contact form submission error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });

  // Admin login endpoint
  app.post('/api/login', async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      // Create JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username, isAdmin: user.isAdmin },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      res.status(200).json({ 
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          username: user.username,
          isAdmin: user.isAdmin
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: 'Validation error', 
          errors: validationError.details 
        });
      } else {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });

  // Get all contact form submissions (requires authentication)
  app.get('/api/submissions', authenticate, async (req, res) => {
    try {
      // Check if user is admin
      if (!req.body.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied' });
      }
      
      const submissions = await storage.getSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Get single submission by ID (requires authentication)
  app.get('/api/submissions/:id', authenticate, async (req, res) => {
    try {
      // Check if user is admin
      if (!req.body.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied' });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid submission ID' });
      }
      
      const submission = await storage.getSubmission(id);
      if (!submission) {
        return res.status(404).json({ message: 'Submission not found' });
      }
      
      res.status(200).json(submission);
    } catch (error) {
      console.error('Error fetching submission:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
