import { makeCreateMeetingUseCase } from "@/use-cases/factories/meetings/make-create-meetings-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function createMetting(request: FastifyRequest, reply: FastifyReply) {
  const createMettingBodytSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    start_time: z.string(),
    end_time: z.string(),
  })

  const { title, description, start_time, end_time } = createMettingBodytSchema.parse(request.body)

  try {
    const makeUseCase = makeCreateMeetingUseCase()
    makeUseCase.execute({
      title,
      description,
      start_time,
      end_time,
      userId: request.user.sub,
    })
    return reply.status(201).send()
  } catch (error) {
    return reply.status(500).send({ message: error })
  }
}