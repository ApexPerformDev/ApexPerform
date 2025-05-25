import { authenticate } from "@/http/controllers/users/authenticate"
import { refresh } from "@/http/controllers/users/refresh"
import { register } from "@/http/controllers/users/register"
import { update } from "@/http/controllers/users/update"
import { verifyJWT } from "@/http/middlewares/verify-jwt"
import { FastifyInstance } from "fastify"

export async function userRoutes(app: FastifyInstance) {
  app.post('/register', register)
  app.post('/sessions', authenticate)
  app.patch('/token/refresh', refresh)
  app.put('/update', {onRequest: verifyJWT}, update)
}