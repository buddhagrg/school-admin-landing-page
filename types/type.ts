import { z } from "zod";
import { ContactFormSchema, RequestFormSchema } from "./schema";

export type ApiSuccessResponse = {
  message: string;
};

export type RequestFormProps = z.infer<typeof RequestFormSchema>;

export type ContactFormProps = z.infer<typeof ContactFormSchema>;
export type NameIdType<T = number> = {
  name: string;
  id: T;
};

export type ApiResponse = {
  severity: "error" | "success";
  messages: string[];
};
