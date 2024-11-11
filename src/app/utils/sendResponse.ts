import { Response } from "express";

// ------------------ send response ------------------------
const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data: T | null | undefined;
  }
) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    status: data?.statusCode,
    message: data?.message,
    meta: data?.meta || null || undefined,
    data: data?.data || null || undefined,
  });
};

export default sendResponse;
