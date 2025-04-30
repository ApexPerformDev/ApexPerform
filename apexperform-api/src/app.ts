import Fastify from 'fastify'
import { userRoutes } from './http/routes/users'

export const app = Fastify()

app.register(userRoutes, {
  prefix: '/users'
})