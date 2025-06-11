import { ProfilesRepositoryUseCase } from "@/repositories/profiles-repository"
import { UsersRepositoryUseCase } from "@/repositories/users-repository"
import { Profile } from "generated/prisma"
import { NotFoundError } from "../errors/not-found-error"

interface UpdateProfileUseCaseRequest {
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

  async execute({cpf, rg, birthdate, phone, role, userId}: UpdateProfileUseCaseRequest): Promise<CreateProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new NotFoundError()
    }

    const profileExists = await this.profilesRepository.findByUserId(userId)


    const profile = await this.profilesRepository.update(userId, {
      cpf: cpf ?? profileExists?.cpf,
      rg: rg ?? profileExists?.rg,
      birthdate: birthdate ?? profileExists?.birthdate,
      phone: phone ?? profileExists?.phone,
      role: role ?? profileExists?.role,
    })

      return {
        profile
      }
    
  }
}