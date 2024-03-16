import * as z from "zod";
import { QueryString } from "../utils/queryString";

const schema = z.object({
  a: z
    .string({ required_error: "A is required" })
    .min(1, "a is required")
    .refine(QueryString.isNumber, { message: "a should be a number" }).transform(a => Number(a)),
  b: z.string().optional(),
  c: z
    .string()
    .min(1, "c is required")
    .refine(QueryString.isBoolean, "c should be a boolean")
    .transform(Boolean)
});//.strict("Extra key found");

type SchemaType = z.infer<typeof schema>;

export const testQueryValidator = schema;
interface Overwrites {
  a: number;
  c: boolean;
}
type OverwritesKeys = keyof Overwrites;

export interface TestQueryType extends Omit<SchemaType, OverwritesKeys>, Overwrites { };