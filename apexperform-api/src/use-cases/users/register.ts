import { UsersRepositoryUseCase } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { User } from "generated/prisma"
import { UserExistError } from "../errors/user-exist-error"

interface RegisterUseCaseRequest {
  firstname: string
  lastname: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepositoryUseCase) {}

  async execute({email, firstname, lastname, password}: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userExist = await this.usersRepository.findOneByEmail(email)

    if(userExist){
      throw new UserExistError()
    }

    const passwordHash = await hash(password, 6)

    const user = await this.usersRepository.create({
      email,
      firstname,
      lastname,
      password: passwordHash
    })

    return {
      user
    }
  }
}