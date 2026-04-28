import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Unesite Vaše ime i prezime"),
  email: z.string().email("Unesite ispravnu email adresu"),
  phone: z.string().min(6, "Unesite Vaš broj telefona"),
  interest: z.string().min(1, "Unesite za šta ste zainteresovani"),
  hasPreviousDog: z.string(),
  livingArrangement: z.string().min(2, "Opišite gde bi pas živeo"),
  message: z.string().min(10, "Unesite poruku (minimum 10 karaktera)"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

