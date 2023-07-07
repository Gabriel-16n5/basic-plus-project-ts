import prisma from "../database/database";
import User from "../protocols/user-protocol";

type CreateUser = Omit<User, "userId">

export async function getUsers() {
    const usersList = await prisma.users.findMany()
    return usersList;
  }

  export async function getUserId(userId:number) {
    const uniqueUser = await prisma.users.findUnique({
      where: {
        userId
      }
    })
    return uniqueUser;
  }

  // export async function getName(name:string) {
  //   const firstUserName = await prisma.users.findFirst({
  //     where: {
  //       name
  //     }
  //   })
  //   return firstUserName;
  // }

export async function createUser(user: CreateUser) {
    const createUser = await prisma.users.create({
      data: user
    })
    return createUser
  }

export async function deleteUserr(userId:User) {
    const deletedUser = await prisma.users.delete({
      where: userId
    })
    return deletedUser
  }  

  export async function updateUserr(user:User, userId:number) {
    const updatedUser = await prisma.users.update({
      data: user,
      where: {
        userId
      }
    })
    return updatedUser
  }