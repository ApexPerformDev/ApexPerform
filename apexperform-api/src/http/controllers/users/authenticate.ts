import { InvalidCredetionError } from "@/use-cases/errors/invalid-credetion-error";
import { makeAuthenticateUseCase } from "@/use-cases/factories/users/make-authenticate-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const registerBodtSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = registerBodtSchema.parse(request.body)
  const makeUseCase = makeAuthenticateUseCase()

  try {
    const { user } = await makeUseCase.execute({email, password})
    const token = await reply.jwtSign({}, {
      sign: {
        sub: user.id
      }
    })

    const refreshToken = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      },
    )

    return reply
    .setCookie('refreshToken', refreshToken, {
      path: '/',
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({
      token,
    })
  } catch (error) {
    if(error instanceof InvalidCredetionError) {
      return reply.status(401).send({ message: error })
    }
    return reply.status(500).send({ message: 'Internal error server' })
  }
}