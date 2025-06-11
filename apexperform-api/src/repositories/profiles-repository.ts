import { Prisma, Profile, User } from "generated/prisma";

export interface ProfilesRepositoryUseCase {
  create(data: Prisma.ProfileCreateInput): Promise<Profile>
  findByUserId(userId: string): Promise<(Profile & { user: User }) | null>
  update(userId: string, data: Prisma.ProfileUpdateInput): Promise<Profile>
}
