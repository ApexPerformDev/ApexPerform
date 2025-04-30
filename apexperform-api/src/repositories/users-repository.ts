import { Prisma, User } from "generated/prisma"

export interface UsersRepositoryUseCase{
  create(data:Prisma.UserCreateInput):Promise<User>
  findUserByEmail(email:string):Promise<User | null>
  findById(id:string):Promise<User | null>
}