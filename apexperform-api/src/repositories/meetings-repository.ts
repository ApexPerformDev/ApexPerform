import { Meeting, Prisma } from "generated/prisma";

export interface MeetingRepositoryUseCase {
  create(data: Prisma.MeetingCreateInput): Promise<Meeting>
}