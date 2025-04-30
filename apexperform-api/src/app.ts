import Fastify from 'fastify'
import { userRoutes } from './http/routes/users'
import { userProfiles } from './http/routes/profiles'

export const app = Fastify()

app.register(userRoutes, {
  prefix: '/users'
})
app.register(userProfiles, {
  prefix: '/profiles'
})