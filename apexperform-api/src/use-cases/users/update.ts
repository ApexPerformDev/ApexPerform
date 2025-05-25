import { UsersRepositoryUseCase } from "@/repositories/users-repository"
import { User } from "generated/prisma"
import { NotFoundError } from "../errors/not-found-error"
import { hash } from "bcryptjs"

interface UpdateUserUseCaseRequest {
  firstname?: string
  lastname?: string
  email?: string
  password: string
  userId: string
}

interface UpdateUserUseCaseResponse {
  user: User
}

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepositoryUseCase) {}

  async execute({email, password, firstname, lastname, userId}: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
    const userExist = await this.usersRepository.findById(userId)

    if(!userExist){
      throw new NotFoundError()
    }

    const passwordHash = await hash(password, 6)

    const user = await this.usersRepository.update(userId, {
      email: email ?? userExist.email,
      firstname: firstname ?? userExist.firstname,
      lastname: lastname ?? userExist.lastname,
      password: passwordHash ?? userExist.password,
    })

    return {
      user
    }
  }
}
