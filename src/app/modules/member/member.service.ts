import { Member, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ------------ get all members ---------------
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany({
    where: {
      isDeleted: false,
      user: {
        role: "MEMBER",
      },
    },
  });

  return result;
};

// ------------ get member by id ---------------
const getMemberByIdFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: memberId,
      isDeleted: false,
    },
  });
  return result;
};

// ------------ update a member ---------------
const updateMemberIntoDB = async (
  memberId: string,
  payload: Partial<Member>
) => {
  const result = await prisma.member.update({
    where: {
      memberId: memberId,
      isDeleted: false,
    },
    data: payload,
  });
  return result;
};

// ------------ delete a member(soft delete) ---------------
const deleteMemberFromDB = async (memberId: string) => {
  // transaction
  await prisma.$transaction(async (transactionClient) => {
    // delete member
    const memberDeletedData = await transactionClient.member.update({
      where: {
        memberId: memberId,
      },
      data: {
        isDeleted: true,
      },
    });

    // delete user
    await transactionClient.user.update({
      where: {
        email: memberDeletedData?.email,
      },
      data: {
        status: "DELETED",
      },
    });
  });

  return null;
};

export const MemberServices = {
  getAllMembersFromDB,
  getMemberByIdFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
