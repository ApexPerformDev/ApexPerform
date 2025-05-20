import { Prisma, User } from "generated/prisma";
import { UsersRepositoryUseCase } from "../users-repository";
import { randomUUID } from "crypto";

export class InMemoryUsersRepository implements UsersRepositoryUseCase {
  constructor( public users: User[] = []) {}
  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: randomUUID(),
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.users.push(user)

    return user
  }
  async findOneByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email)
    return user ?? null
  }
  async findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

}