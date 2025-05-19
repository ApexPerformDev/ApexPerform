import { ProfilesRepositoryUseCase } from "@/repositories/profiles-repository"
import { Profile } from "generated/prisma"
import { NotFoundError } from "../errors/not-found-error"

interface FindProfileByUserIdUseCaseRequest {
  userId: string
}

interface FindProfileByUserIdUseCaseResponse {
  profile: Profile
}

export class FindProfileByUserIdUseCase {
  constructor(
    private profilesRepository: ProfilesRepositoryUseCase,
  ) {}

  async execute({userId}: FindProfileByUserIdUseCaseRequest): Promise<FindProfileByUserIdUseCaseResponse> {

    const profile = await this.profilesRepository.findByUserId(userId)

    if (!profile) {
      throw new NotFoundError()
    }

      return {
        profile
      }
    
  }
}