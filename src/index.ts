import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { handlers } from './routes.js'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// initialize all routes
handlers.forEach(handler => {
  app.route(handler.path, handler.appInstance)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Database connection url is: ${process.env.DATABASE_URL}`)
  console.log(`Server is running on http://localhost:${info.port}`)
})
