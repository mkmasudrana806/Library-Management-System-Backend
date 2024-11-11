import { PrismaClient, UserRole } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import config from "../../config";

// ------------ create member into   ---------------
const createMemberIntoDB = async (payload: any) => {
  // hash the password
  const hashedPassword = await bcrypt.hash(
    config.default_password as string,
    Number(config.bcrypt_salt_rounds)
  );

  // create user
  const userData = {
    email: payload?.email,
    password: hashedPassword,
    role: UserRole.MEMBER,
  };

  // transaction
  const result = await prisma.$transaction(async (transactionClient) => {
    // create user
    await transactionClient.user.create({
      data: userData,
    });

    // create admin
    const createdAdminData = await transactionClient.member.create({
      data: payload,
    });

    return createdAdminData;
  });

  return result;
};

// ------------ create librayian into   ---------------
const createLibrayianIntoDB = async (payload: any) => {
  // hash the password
  const hashedPassword = await bcrypt.hash(
    config.default_password as string,
    Number(config.bcrypt_salt_rounds)
  );

  // create user
  const userData = {
    email: payload?.email,
    password: hashedPassword,
    role: UserRole.LIBRARIAN,
  };

  // transaction
  const result = await prisma.$transaction(async (transactionClient) => {
    // create user
    await transactionClient.user.create({
      data: userData,
    });

    // create admin
    const createdAdminData = await transactionClient.member.create({
      data: payload,
    });

    return createdAdminData;
  });

  return result;
};

// export all services
export const UserServices = {
  createMemberIntoDB,
  createLibrayianIntoDB,
};
