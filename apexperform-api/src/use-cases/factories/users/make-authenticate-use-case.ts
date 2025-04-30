import { PrismaUsersRepository } from "@/repositories/prisma/prisma-user-repository"
import { AuthenticateUseCase } from "@/use-cases/users/authenticate"

export function makeAuthenticateUseCase () {
  const userRepository = new PrismaUsersRepository()
  const useCase = new AuthenticateUseCase(userRepository)
  return useCase
}