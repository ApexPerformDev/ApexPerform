import { UsersRepositoryUseCase } from "@/repositories/users-repository"
import { compare } from "bcryptjs"
import { User } from "generated/prisma"

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  user: User
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UsersRepositoryUseCase) {}

  async execute({email, password}: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findOneByEmail(email)

    if(!user){
      throw new Error("Invalid credation")
    }

    const doesPasswordMatches = await compare(password, user.password)

    if(!doesPasswordMatches) {
      throw new Error("Invalid credation")
    }

    return {
      user
    }
  }
}