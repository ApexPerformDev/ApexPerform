import { makeRegisterUseCase } from "@/use-cases/factories/users/make-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function register(request: FastifyRequest, reply: FastifyReply) {
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
    makeUseCase.execute({
      firstname,
      lastname,
      email,
      password
    })
    return reply.status(201).send()
  } catch (error) {
    return reply.status(500).send({ message: error })
  }
}