import { Prisma, Profile, User } from "generated/prisma";
import { ProfilesRepositoryUseCase } from "../profiles-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProfileRepository implements ProfilesRepositoryUseCase {
  async update(userId: string, data: Prisma.ProfileUpdateInput){
    const user = await prisma.profile.update({
      where: {
        user_id: userId
      },
      data
    })
    return user
  }
  async findByUserId(userId: string): Promise<(Profile & { user: User }) | null> {
    const profile = await prisma.profile.findUnique({
      where: {
        user_id: userId,
      },
      include: {
        user: true,
      },
    })

    return profile
  }

  async create(data: Prisma.ProfileCreateInput){
    const profile = await prisma.profile.create({
      data
    })
    return profile
  }

}