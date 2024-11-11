import { NextFunction, Request, Response } from "express";
import { constants as httpStatus } from "http2";

// ----------------- global error handler middleware ----------------
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(httpStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
    success: false,
    status: err?.status || httpStatus.HTTP_STATUS_INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
  });
};

export default globalErrorHandler;
