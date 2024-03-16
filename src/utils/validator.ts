import { SafeParseReturnType, z } from "zod";

export const validator = <T>(e: z.ZodObject<any>, data: any): T => {
  const parsed = e.safeParse(data);
  if (parsed.success === true) {
    return parsed.data as T;
  } else {
    const er = parsed.error.errors[0];
    const message = `${er.path.length > 0 ? `${er.path[0]}: ` : ``}${er.message}` ?? "Validation error";
    throw new Error(message);
  }
};