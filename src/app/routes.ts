import express from "express";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { BookRoutes } from "./modules/book/book.routes";
import { MemberRoutes } from "./modules/member/member.routes";
const router = express.Router();

// members routes
router.use("/members", MemberRoutes);

// auth routes
router.use("/auth", AuthRoutes);

// books routes
router.use("/books", BookRoutes);

export const Routes = router;
