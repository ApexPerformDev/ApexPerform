import { ProfilesRepositoryUseCase } from '@/repositories/profiles-repository'
import { NotFoundError } from '../errors/not-found-error'

interface FindProfileByUserIdUseCaseRequest {
  userId: string
}

interface FindProfileByUserIdUseCaseResponse {
  profile: {
    id: string
    cpf: string
    rg: string | null
    phone: string
    birthdate: string
    role: string
    created_at: Date
    updated_at: Date
    user_id: string
    user: {
      id: string
      firstname: string
      lastname: string
      email: string
      created_at: Date
    }
  }
}

export class FindProfileByUserIdUseCase {
  constructor(private profilesRepository: ProfilesRepositoryUseCase) {}

  async execute({
    userId,
  }: FindProfileByUserIdUseCaseRequest): Promise<FindProfileByUserIdUseCaseResponse> {
    const profile = await this.profilesRepository.findByUserId(userId)

    if (!profile || !profile.user) {
      throw new NotFoundError()
    }

    const { user, ...rest } = profile
    const { password, ...userWithoutPassword } = user

    return {
      profile: {
        ...rest,
        user: userWithoutPassword,
      },
    }
  }
}
