import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { constants as httpStatus } from "http2";

// ------------------ create member ------------------
const createMember = catchAsync(async (req, res) => {
  const result = await UserServices.createMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

// ------------------ create member ------------------
const createLibrayian = catchAsync(async (req, res) => {
  const result = await UserServices.createLibrayianIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const UserController = {
  createMember,
  createLibrayian,
};
