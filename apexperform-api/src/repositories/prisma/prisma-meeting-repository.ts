import { Prisma } from "generated/prisma";
import { MeetingRepositoryUseCase } from "../meetings-repository";
import { prisma } from "@/lib/prisma";

export class PrismaMeetingRepositoy implements MeetingRepositoryUseCase {
  async create(data: Prisma.MeetingCreateInput) {
    const meeting = await prisma.meeting.create({
      data
    })
    return meeting
  }

}