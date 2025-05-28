import { NotFoundError } from "@/use-cases/errors/not-found-error";
import { makeUpdateUseCase } from "@/use-cases/factories/users/make-update-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateBodySchema = z.object({
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  })
  const updateParamsSchema = z.object({
    userId: z.string().uuid(),
  })

  const { firstname, lastname, email, password } = updateBodySchema.parse(request.body)
  const { userId } = updateParamsSchema.parse(request.params)
  const makeUseCase = makeUpdateUseCase()

  try {
    await makeUseCase.execute({
      firstname,
      lastname,
      email,
      password,
      userId,
    })
    return reply.status(200).send()
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(400).send({ message: error.message })
    }
    return reply.status(500).send({ message: 'Internal server error' })
  }
}