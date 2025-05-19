import Fastify from 'fastify'
import cors from '@fastify/cors'
import { userRoutes } from './http/routes/users'
import { userProfiles } from './http/routes/profiles'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { env } from './env'
import { userMeeting } from './http/routes/meetings'

export const app = Fastify()

app.register(cors, {
  origin: '*',
  credentials: true,
})

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
app.register(userMeeting, {
  prefix: '/meeting'
})