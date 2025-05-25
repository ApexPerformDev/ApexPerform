import { PrismaUsersRepository } from "@/repositories/prisma/prisma-user-repository";
import { UpdateUserUseCase } from "@/use-cases/users/update";

export function makeUpdateUseCase () {
  const userRepository = new PrismaUsersRepository()
  const useCase = new UpdateUserUseCase(userRepository)
  return useCase
}