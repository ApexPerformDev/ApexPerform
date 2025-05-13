import { UserExistError } from "@/use-cases/errors/user-exist-error";
import { makeRegisterUseCase } from "@/use-cases/factories/users/make-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodtSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { firstname, lastname, email, password } = registerBodtSchema.parse(request.body)
  console.log(firstname, lastname, email, password)
  const makeUseCase = makeRegisterUseCase()

  try {
    await makeUseCase.execute({
      firstname,
      lastname,
      email,
      password
    })
    return reply.status(201).send()
  } catch (error) {
    if (error instanceof UserExistError) {
      return reply.status(409).send({ message: error.message })
    }
    return reply.status(500).send({ message: 'Internal server error' })
  }
}