import { PrismaClient } from "@prisma/client";
import { differenceInDays } from "date-fns";
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

// ------------ return list of overdue days borrowed info --------------------
const getOverdueBorrowListsFromDB = async () => {
  // Define the cutoff date (14 days before the current date)
  const overdueCutoffDate = new Date();
  overdueCutoffDate.setDate(overdueCutoffDate.getDate() - 14);

  // Fetch borrow records where the  borrowDate is more than 14 days in the past
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      isDeleted: false,
      borrowDate: {
        lt: overdueCutoffDate, // Borrow date is older than 14 days ago
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  // Map the overdue records to include overdueDays
  const overdueData = overdueRecords.map((record) => {
    const overdueDays = differenceInDays(new Date(), record.borrowDate) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });
  return overdueData;
};

export const BorrowRecordServices = {
  borrowBookIntoDB,
  returnBookFromDB,
  getOverdueBorrowListsFromDB,
};
