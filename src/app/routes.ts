import express from "express";
import { UserRoutes } from "./modules/User/user.routes";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { BookRoutes } from "./modules/book/book.routes";
const router = express.Router();

// users routes
router.use("/users", UserRoutes);

// auth routes
router.use("/auth", AuthRoutes);

// books routes
router.use("/books", BookRoutes);

export const Routes = router;

