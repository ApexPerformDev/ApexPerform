import { PrismaUsersRepository } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUseCase } from "@/use-cases/users/register";

export function makeRegisterUseCase () {
  const userRepository = new PrismaUsersRepository()
  const useCase = new RegisterUseCase(userRepository)
  return useCase
}