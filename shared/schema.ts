import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Admin Users Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  isAdmin: true,
});

// Contact Form Submissions Schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  state: text("state"),
  injuryType: text("injury_type"),
  affectedExtremity: text("affected_extremity"),
  injuryYear: text("injury_year"),
  currentTherapy: text("current_therapy"),
  referralSource: text("referral_source"),
  organization: text("organization"),
  position: text("position"),
  interest: text("interest"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  notified: boolean("notified").default(false).notNull(),
  sheetSynced: boolean("sheet_synced").default(false).notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  state: true,
  injuryType: true,
  affectedExtremity: true,
  injuryYear: true,
  currentTherapy: true,
  referralSource: true,
  organization: true,
  position: true,
  interest: true,
  message: true,
});

// Validation schemas with more specific rules
export const contactFormSchema = insertContactSubmissionSchema.extend({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  state: z.string().min(1, "State is required"),
  injuryType: z.string().min(1, "Injury Type is required"),
  affectedExtremity: z.string().min(1, "Affected Extremity is required"),
  injuryYear: z.string().min(1, "Injury Year is required"),
  currentTherapy: z.string().min(1, "Current therapy information is required"),
  referralSource: z.string().min(1, "Please tell us how you found us"),
  organization: z.string().optional(),
  position: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
