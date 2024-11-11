import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

// create book
router.post("/create-book", BookController.createBook);

// get all books
router.get("/", BookController.getAllBooks);

// get single book by id
router.get("/:bookId", BookController.getBookById);

// update a book
router.put("/:bookId", BookController.updateBook);

// delete a book
router.delete("/:bookId", BookController.deleteBook);

export const BookRoutes = router;
