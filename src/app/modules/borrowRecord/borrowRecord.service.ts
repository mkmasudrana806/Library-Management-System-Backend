import { BorrowRecord, PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();

// ------------ borrow a book   ---------------
const borrowBookIntoDB = async (payload: {
  bookId: string;
  memberId: string;
}) => {
  // check if the book exists
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload?.bookId,
      isDeleted: false,
    },
  });

  // check if the member exists
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload?.memberId,
      isDeleted: false,
    },
  });

  const result = await prisma.borrowRecord.create({
    data: payload,
  });

  return result;
};

// ------------ return a book   ---------------
const returnBookFromDB = async (payload: { borrowId: string }) => {
  // check if the borrow id exists
  await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: payload?.borrowId,
      isDeleted: false,
    },
  });

  // delete return borrow from database (soft delete)
  await prisma.borrowRecord.update({
    where: {
      borrowId: payload?.borrowId,
      isDeleted: false,
    },
    data: {
      isDeleted: true,
    },
  });
  return null;
};

export const BorrowRecordServices = {
  borrowBookIntoDB,
  returnBookFromDB,
};
