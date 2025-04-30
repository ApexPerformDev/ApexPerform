import { ProfilesRepositoryUseCase } from "@/repositories/profiles-repository"
import { UsersRepositoryUseCase } from "@/repositories/users-repository"
import { Prisma, Profile } from "generated/prisma"

interface CreateProfileUseCaseRequest {
  cpf: string
  rg?: string
  phone: string
  birthdate: string
  role?: string
  userId: string
}

interface CreateProfileUseCaseResponse {
  profile: Profile
}

export class CreateProfileUseCase {
  constructor(
    private profilesRepository: ProfilesRepositoryUseCase,
    private usersRepository: UsersRepositoryUseCase
  ) {}

  async execute({cpf, rg, birthdate, phone, role, userId}: CreateProfileUseCaseRequest): Promise<CreateProfileUseCaseResponse> {
    const userExists = await this.usersRepository.findById(userId)

    if (!userExists) {
      throw new Error('User not found')
    }
    const profile = await this.profilesRepository.create(
      {
        cpf: cpf,
        rg: rg ?? null,
        birthdate,
        phone,
        role: role,
        user: {
          connect: { id: userId }
        }
      })

      return {
        profile
      }
    
  }
}