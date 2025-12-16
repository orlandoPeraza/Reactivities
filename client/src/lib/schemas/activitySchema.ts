import { z } from "zod";

const requiredString = (fieldName: string) =>
  z.string().min(1, `${fieldName} is required`);

export const activitySchema = z.object({
  title: requiredString("Title"),
  description: requiredString("Description"),
  category: requiredString("Category"),
  date: z.coerce
    .date()
    .refine((d) => !isNaN(d.getTime()), { message: "Date is required" }),
  location: z.object({
    venue: requiredString("Venue"),
    city: z.string().optional(),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
  }),
});

export type ActivitySchema = z.infer<typeof activitySchema>;
