import { PrismaProfileRepository } from "@/repositories/prisma/prisma-profile-repository";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-user-repository";
import { CreateProfileUseCase } from "@/use-cases/profiles/create";

export function makeCreateProfileUseCase () {
  const profileRepository = new PrismaProfileRepository()
  const userRepository = new PrismaUsersRepository()
  const useCase = new CreateProfileUseCase(profileRepository, userRepository)
  return useCase
}