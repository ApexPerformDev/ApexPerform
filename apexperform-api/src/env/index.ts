import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  if (_env.error instanceof z.ZodError) {
    console.log('Variáveis de ambiente inválidas:', JSON.stringify(_env.error.format(), null, 2))
    throw new Error('Variáveis de ambiente inválidas')
  }
  throw new Error('Variáveis de ambiente inválidas')
}
export const env = _env.data