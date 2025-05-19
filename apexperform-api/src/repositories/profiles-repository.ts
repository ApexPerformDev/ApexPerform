import { Prisma, Profile } from "generated/prisma";

export interface ProfilesRepositoryUseCase {
  create(data: Prisma.ProfileCreateInput): Promise<Profile>
  findByUserId(userId: string): Promise<Profile | null>
}