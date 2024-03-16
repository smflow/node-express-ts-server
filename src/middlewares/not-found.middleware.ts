import { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/error";

export function notFound(_req: Request, _res: Response, next: NextFunction) {
  return sendError(next, {
    message: "Requested url was not found",
    status: 404
  });
}