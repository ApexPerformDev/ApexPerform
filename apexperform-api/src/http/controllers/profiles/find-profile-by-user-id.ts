import { NotFoundError } from "@/use-cases/errors/not-found-error";
import { makeFindProfileByUserIdUseCase } from "@/use-cases/factories/profiles/make-find-profle-by-user-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findProfileByUserId(request: FastifyRequest, reply: FastifyReply) {
  const findProfileParamtSchema = z.object({
    userId: z.string(),
  })

  const { userId } = findProfileParamtSchema.parse(request.params)
  
  try {
    const makeUseCase = makeFindProfileByUserIdUseCase()
    const profile = await makeUseCase.execute({ userId })
    
    return reply.status(200).send({profile})
  } catch (error) {
    if(error instanceof NotFoundError) {
      return reply.status(404).send({ message: error })
    }
    return reply.status(500).send({ message: error })
  }
}