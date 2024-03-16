import { Router } from "express";
import { validator } from "../utils/validator";
import { TestQueryType, testQueryValidator } from "../validators/test.validator";
import { sendError } from "../utils/error";

const r = Router();

r.get("/test", (req, res, next) => {
  try {

    const data = validator<TestQueryType>(testQueryValidator, req.query);

    console.log(data);

    res.json([req.query, data]);
  } catch (error: any) {
    return sendError(next, {
      error: error.message,
      status: 400
    });
  }
});

export const testRouter = r;