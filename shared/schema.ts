import { z } from "zod";

// Contact form submission schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Email response schema
export const emailResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type EmailResponse = z.infer<typeof emailResponseSchema>;

// Service type for the services data
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  features: string[];
  longDescription: string;
}

// Industry type
export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
}
