import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server' // Deno 'npm:@hono/trpc-server'
import { appRouter } from './router'

const hono = new Hono()

hono.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  })
)
console.log('Server running on port 3000')

export default hono
