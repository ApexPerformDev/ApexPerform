import { PrismaMeetingRepositoy } from "@/repositories/prisma/prisma-meeting-repository";
import { CreateMeetingUseCase } from "@/use-cases/meetings/create-meeting";

export function makeCreateMeetingUseCase () {
  const meetingRepository = new PrismaMeetingRepositoy()
  const useCase = new CreateMeetingUseCase( meetingRepository)
  return useCase
}