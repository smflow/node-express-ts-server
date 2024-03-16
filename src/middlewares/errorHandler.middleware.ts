import { NextFunction, Request, Response } from "express";

import { BaseError } from "../utils/error";

export function errorHandler(error: BaseError, req: Request, res: Response, next: NextFunction) {
  const msg = {
    path: req.url,
    timeStamps: Date.now(),
    message: error.message ?? error?.error ?? "Internal server error",
    status: error.status ?? 500
  };

  console.log("Error: " + msg);

  return res.json(msg);
}