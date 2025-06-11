import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { env } from './env'
import { userRoutes } from './http/controllers/users/routes'
import { userProfiles } from './http/controllers/profiles/routes'
import { userMeeting } from './http/controllers/mettings/routes'

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