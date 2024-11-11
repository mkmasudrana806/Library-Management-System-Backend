import { Book, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ------------ create book into db ---------------
const createBookIntoDB = async (payload: any) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

// ------------ get all books ---------------
const getAllBooksFromDB = async () => {
  const result = await prisma.book.findMany({
    where: {
      isDeleted: false,
    },
  });

  return result;
};

// ------------ get book by id ---------------
const getBookByIdFromDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: bookId,
      isDeleted: false,
    },
  });
  return result;
};

// ------------ update a book ---------------
const updateBookIntoDB = async (bookId: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      bookId: bookId,
      isDeleted: false,
    },
    data: payload,
  });
  return result;
};

// ------------ delete a book(soft delete) ---------------
const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.update({
    where: {
      bookId: bookId,
      isDeleted: false,
    },
    data: {
      isDeleted: true,
    },
  });
  return null;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooksFromDB,
  getBookByIdFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
