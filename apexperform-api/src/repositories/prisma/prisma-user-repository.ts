import { Prisma, User } from "generated/prisma"
import { UsersRepositoryUseCase } from "../users-repository"
import { prisma } from "@/lib/prisma"

export class PrismaUsersRepository implements UsersRepositoryUseCase {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })
    if(!user){
      return null
    }
    return user
  }

  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where:{
        email
      }
    })
    if(!user){
      return null
    }
    return user
  }

  async create(data:Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data
    })
    return user
  }
}