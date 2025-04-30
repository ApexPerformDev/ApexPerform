import { Prisma, User } from "generated/prisma"

export interface UsersRepositoryUseCase{
  create(data:Prisma.UserCreateInput):Promise<User>
  findOneByEmail(email:string):Promise<User | null>
  findById(id:string):Promise<User | null>
}