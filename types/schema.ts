import { z } from "zod";

export const DemoFormSchema = z.object({
  schoolName: z.string().min(1, "School Name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  role: z.string().optional(),
  email: z.string().min(1, "Email is required"),
  phone: z.string().optional(),
  schoolSize: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export const ContactFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().min(1, "Email is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .refine((val) => val.length >= 10, {
      message: "Message must be at least 10 characters long",
    }),
});
