import { Prisma } from "generated/prisma";
import { ProfilesRepositoryUseCase } from "../profiles-repository";
import { prisma } from "@/lib/prisma";

export class PrismaProfileRepository implements ProfilesRepositoryUseCase {
  async create(data: Prisma.ProfileCreateInput){
    const profile = await prisma.profile.create({
      data
    })
    return profile
  }

}