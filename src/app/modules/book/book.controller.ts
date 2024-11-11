import { BookServices } from "./book.service";
import { constants as httpStatus } from "http2";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// ------------------ create book ------------------
const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// ------------------ get all books ------------------
const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

// ------------------ get book by id ------------------
const getBookById = catchAsync(async (req, res) => {
  const result = await BookServices.getBookByIdFromDB(req.params?.bookId);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

// ------------------ update a book ------------------
const updateBook = catchAsync(async (req, res) => {
  const result = await BookServices.updateBookIntoDB(
    req.params?.bookId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

// ------------------ delete a book ------------------
const deleteBook = catchAsync(async (req, res) => {
  const result = await BookServices.deleteBookFromDB(req.params?.bookId);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Book successfully deleted",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
