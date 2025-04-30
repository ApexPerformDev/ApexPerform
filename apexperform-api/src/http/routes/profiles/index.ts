import { createProfile } from "@/http/controllers/profiles/create-profile"
import { FastifyInstance } from "fastify"

export async function userProfiles(app: FastifyInstance) {
  app.post('/create', createProfile)
}