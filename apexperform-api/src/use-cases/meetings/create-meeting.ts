import { MeetingRepositoryUseCase } from "@/repositories/meetings-repository"
import { Meeting } from "generated/prisma"

interface CreateMeetingUseCaseRequest {
  title: string
  description?: string
  start_time: string
  end_time: string
  userId: string
}

interface CreateMeetingUseCaseResponse {
  metting: Meeting
}

export class CreateMeetingUseCase {
  constructor(
    private meetingsRepository: MeetingRepositoryUseCase,
  ) {}

  async execute({ title, description, start_time, end_time, userId }: CreateMeetingUseCaseRequest): Promise<CreateMeetingUseCaseResponse> {

    const metting = await this.meetingsRepository.create({
      title,
      description,
      start_time,
      end_time,
      user: {
        connect: {
          id: userId
        }
      },
    })

      return {
        metting
      }
    
  }
}