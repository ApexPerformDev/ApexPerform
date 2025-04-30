import Fastify from 'fastify'
import { userRoutes } from './http/routes/users'
import { userProfiles } from './http/routes/profiles'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import fastifyCookie from '@fastify/cookie'

export const app = Fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(userRoutes, {
  prefix: '/users'
})
app.register(userProfiles, {
  prefix: '/profiles'
})