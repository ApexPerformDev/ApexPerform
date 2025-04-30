import { makeCreateProfileUseCase } from "@/use-cases/factories/profiles/make-create-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function createProfile(request: FastifyRequest, reply: FastifyReply) {
  const createProfileBodtSchema = z.object({
    cpf: z.string(),
    rg: z.string().optional(),
    birthdate: z.string(),
    phone: z.string(),
    role: z.string().default('client')
  })

  const { cpf, rg, birthdate, phone, role } = createProfileBodtSchema.parse(request.body)
  const makeUseCase = makeCreateProfileUseCase()

  try {
    makeUseCase.execute({
      cpf,
      rg,
      birthdate,
      phone,
      role,
      user: request.user.sub
    })
    return reply.status(201).send()
  } catch (error) {
    return reply.status(500).send({ message: error })
  }
}