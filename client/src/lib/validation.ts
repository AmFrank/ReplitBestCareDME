import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().optional(),
});

// Login form validation schema
export const loginFormSchema = z.object({
  username: z.string().min(1, "Username is required").email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional(),
});

// Helper functions for common validation tasks

/**
 * Validates a phone number format
 */
export function validatePhoneNumber(phone: string): boolean {
  // Simple regex for US phone numbers
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}

/**
 * Formats a phone number to a standard format
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}
