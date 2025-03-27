import { z } from "zod";
import { ContactFormSchema, DemoFormSchema } from "./schema";

export type ApiSuccessResponse = {
  message: string;
};

export type DemoFormProps = z.infer<typeof DemoFormSchema>;

export type ContactFormProps = z.infer<typeof ContactFormSchema>;
export type NameIdType<T = number> = {
  name: string;
  id: T;
};
