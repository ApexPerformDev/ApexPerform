import { Prisma } from "generated/prisma"
import { UsersRepositoryUseCase } from "../users-repository"
import { prisma } from "@/lib/prisma"

export class PrismaUsersRepository implements UsersRepositoryUseCase {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })
    
    return user
  }

  async findOneByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where:{
        email
      }
    })

    return user
  }

  async create(data:Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data
    })
    return user
  }
}