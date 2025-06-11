import { makeCreateProfileUseCase } from "@/use-cases/factories/profiles/make-create-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function updateProfile(request: FastifyRequest, reply: FastifyReply) {
  const updateProfileBodySchema = z.object({
    cpf: z.string(),
    rg: z.string().optional(),
    birthdate: z.string(),
    phone: z.string(),
    role: z.string().default('client')
  })
  const updateProfileParamsSchema = z.object({
    userId: z.string()
  })

  const { cpf, rg, birthdate, phone, role } = updateProfileBodySchema.parse(request.body)
  const { userId } = updateProfileParamsSchema.parse(request.params)
  const makeUseCase = makeCreateProfileUseCase()

  try {
    makeUseCase.execute({
      cpf,
      rg,
      birthdate,
      phone,
      role,
      userId,
    })
    return reply.status(200).send()
  } catch (error) {
    return reply.status(500).send({ message: error })
  }
}