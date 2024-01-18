import { Hono } from 'hono'

const hono = new Hono()

console.log('Server running on port 3000')
hono.get("/ping", (c) => c.text("pong"));

export default hono
