import { MemberServices } from "./member.service";
import { constants as httpStatus } from "http2";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// ------------------ get all members ------------------
const getAllMembers = catchAsync(async (req, res) => {
  const result = await MemberServices.getAllMembersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

// ------------------ get member by id ------------------
const getMemberById = catchAsync(async (req, res) => {
  const result = await MemberServices.getMemberByIdFromDB(req.params?.memberId);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

// ------------------ update a member ------------------
const updateMember = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMemberIntoDB(
    req.params?.memberId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

// ------------------ delete a member ------------------
const deleteMember = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMemberFromDB(req.params?.memberId);

  sendResponse(res, {
    statusCode: httpStatus.HTTP_STATUS_OK,
    success: true,
    message: "Member successfully deleted",
    data: result,
  });
});

export const MemberController = {
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
