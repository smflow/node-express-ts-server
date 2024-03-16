import * as z from "zod";
import { QueryString } from "../utils/queryString";

const schema = z.object({
  a: z
    .string()
    .min(1, "a is required")
    .refine(QueryString.isNumber, { message: "a should be a number" }),
  b: z.string().nullable(),
  c: z
    .string()
    .min(1, "c is required")
    .refine(QueryString.isBoolean, "c should be a boolean")
}).strict("Extra key found");

type SchemaType = z.infer<typeof schema>;

export const testQueryValidator = schema;
interface Overwrites {
  a: number;
  c: boolean;
}
type OverwritesKeys = keyof Overwrites;

export interface TestQueryType extends Omit<SchemaType, OverwritesKeys>, Overwrites { };