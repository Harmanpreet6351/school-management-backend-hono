import { Hono } from "hono";
import { signInRequestSchema } from "../schemas/auth.schema.js";
import { parseZodError } from "../utils/zod.util.js";


export const authHandler = new Hono()

authHandler.post("/sign-in", async (c) => {
  const body = await c.req.json()
  
  const parsedData = await signInRequestSchema.safeParseAsync(body)

  if (!parsedData.success) {
    c.status(400)
    return c.json({
      error: parseZodError(parsedData.error)
    })
  }
  
  return c.json({
    data: parsedData.data
  })
})