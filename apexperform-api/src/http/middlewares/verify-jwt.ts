import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
    console.log('Token verified!', request.user)
  } catch (error) {
    console.log(error)
    return reply.status(401).send({ message: 'Unauthorized.' })
  }
}
