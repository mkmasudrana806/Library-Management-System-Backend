import express from "express";
import { BorrowRecordController } from "./borrowRecord.controller";
const router = express.Router();

// borrow a book
router.post("/", BorrowRecordController.borrowBook);

export const BorrowRecordRoutes = router;

// return book
const returnRoutes = express.Router();

returnRoutes.post("/", BorrowRecordController.returnBook);

export const ReturnRoutes = returnRoutes;
