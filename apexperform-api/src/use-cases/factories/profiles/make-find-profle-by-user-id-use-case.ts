import { PrismaProfileRepository } from "@/repositories/prisma/prisma-profile-repository";
import { FindProfileByUserIdUseCase } from "@/use-cases/profiles/find-profile-by-user-id";

export function makeFindProfileByUserIdUseCase () {
  const profileRepository = new PrismaProfileRepository()
  const useCase = new FindProfileByUserIdUseCase(profileRepository)
  return useCase
}