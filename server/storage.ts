import { users, contactSubmissions, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  // User management
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact form submissions
  createSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getSubmissions(): Promise<ContactSubmission[]>;
  getSubmission(id: number): Promise<ContactSubmission | undefined>;
  updateSubmissionNotified(id: number, notified: boolean): Promise<ContactSubmission | undefined>;
  updateSubmissionSheetSynced(id: number, sheetSynced: boolean): Promise<ContactSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private submissions: Map<number, ContactSubmission>;
  private userCurrentId: number;
  private submissionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.submissions = new Map();
    this.userCurrentId = 1;
    this.submissionCurrentId = 1;

    // Add default admin user
    this.createUser({
      username: "admin@bestcaredme.com",
      password: "admin123", // In a real app, this would be hashed
      isAdmin: true,
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const createdAt = new Date();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.submissionCurrentId++;
    const createdAt = new Date();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt, 
      notified: false,
      sheetSynced: false
    };
    this.submissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.submissions.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.submissions.get(id);
  }

  async updateSubmissionNotified(id: number, notified: boolean): Promise<ContactSubmission | undefined> {
    const submission = this.submissions.get(id);
    if (!submission) return undefined;
    
    const updatedSubmission = { ...submission, notified };
    this.submissions.set(id, updatedSubmission);
    return updatedSubmission;
  }

  async updateSubmissionSheetSynced(id: number, sheetSynced: boolean): Promise<ContactSubmission | undefined> {
    const submission = this.submissions.get(id);
    if (!submission) return undefined;
    
    const updatedSubmission = { ...submission, sheetSynced };
    this.submissions.set(id, updatedSubmission);
    return updatedSubmission;
  }
}

export const storage = new MemStorage();
