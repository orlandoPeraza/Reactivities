import { type DateArg, format } from "date-fns";
import z from "zod";
export function formatDate(date: DateArg<Date>) {
  return format(date, "dd MMM yyyy h:mm a");
}

export const requiredString = (fieldName: string) =>
  z.string().min(1, `${fieldName} is required`);
