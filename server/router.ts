import { initTRPC } from '@trpc/server'
import SuperJSON from 'superjson'
import { z } from 'zod'

const t = initTRPC.create({'transformer': SuperJSON})

const publicProcedure = t.procedure
const router = t.router

export const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    console.log('getting the world')
    return `Hello ${input ?? 'World'}!`
  }),
})

export type AppRouter = typeof appRouter
