import express from "express";
import { MemberController } from "./member.controller";
import { UserController } from "../User/user.controller";
const router = express.Router();

// create member
router.post("/create-member", UserController.createMember);

// create librayian
router.post("/create-librayian", UserController.createLibrayian);

// get all members
router.get("/", MemberController.getAllMembers);

// get single member by id
router.get("/:memberId", MemberController.getMemberById);

// update a member
router.put("/:memberId", MemberController.updateMember);

// delete a member
router.delete("/:memberId", MemberController.deleteMember);

export const MemberRoutes = router;
