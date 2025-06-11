import { createMetting } from "@/http/controllers/mettings/create-metting"
import { verifyJWT } from "@/http/middlewares/verify-jwt"
import { FastifyInstance } from "fastify"

export async function userMeeting(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/create', createMetting)
}