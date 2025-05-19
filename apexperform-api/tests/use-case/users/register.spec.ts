import { InMemoryUsersRepository } from '@/repositories/in-memory/In-Memory-Users-Repository'
import { RegisterUseCase } from '@/use-cases/users/register'
import { beforeEach, describe, expect, it } from 'vitest'

let userRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register User Use Case', () => {
  beforeEach(() => {
    userRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(userRepository)
  })

  it('Should be able to register user', async () => {
    const { user } = await sut.execute({
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should not be able to register user with email same', async () => {
    const userExist = await userRepository.create({
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    await expect(
      sut.execute({
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
