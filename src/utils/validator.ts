import { SafeParseReturnType, z } from "zod";

export const validator = <T>(e: z.ZodObject<any>, data: any): T => {
  const parsed = e.safeParse(data);
  if (parsed.success === true) {
    return parsed.data as T;
  } else {
    const message = parsed.error.errors[0].message ?? "Validation error";
    throw new Error(message);
  }
};