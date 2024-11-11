import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { constants as httpStatus } from "http2";
import { BorrowRecordServices } from "./borrowRecord.service";

// ------------------ borrow a book ------------------
const borrowBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordServices.borrowBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

// ------------------ return a book ------------------
const returnBook = catchAsync(async (req, res) => {
  const result = await BorrowRecordServices.returnBookFromDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book returned successfully",
    data: result,
  });
});

// ------------------ get overdue borrow lists ------------------
const getOverdueBorrowLists = catchAsync(async (req, res) => {
  const result = await BorrowRecordServices.getOverdueBorrowListsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result,
  });
});

export const BorrowRecordController = {
  borrowBook,
  returnBook,
  getOverdueBorrowLists,
};
