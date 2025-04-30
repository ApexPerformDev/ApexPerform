import { createProfile } from "@/http/controllers/profiles/create-profile"
import { verifyJWT } from "@/http/middlewares/verify-jwt"
import { FastifyInstance } from "fastify"

export async function userProfiles(app: FastifyInstance) {
  app.post('/create',{ onRequest: [verifyJWT] }, createProfile)
}