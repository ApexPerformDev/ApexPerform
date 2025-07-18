import { createProfile } from "@/http/controllers/profiles/create-profile"
import { findProfileByUserId } from "@/http/controllers/profiles/find-profile-by-user-id"
import { verifyJWT } from "@/http/middlewares/verify-jwt"
import { FastifyInstance } from "fastify"
import { updateProfile } from "./update-profile"

export async function userProfiles(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)
  app.post('/create', createProfile)
  app.get('/me/:userId', findProfileByUserId)
  app.put('/me/:userId', updateProfile)
}