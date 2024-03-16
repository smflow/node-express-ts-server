import { NextFunction } from "express";

export interface BaseError {
  message?: string;
  status?: number;
  error?: string;
}

export const sendError = function (next: NextFunction, error: BaseError) {
  return next(error);
};