import type { Hono } from "hono"
import { authHandler } from "./handlers/auth.handler.js"


type HandlerDefinition = {
  path: string,
  appInstance: Hono
}


export const handlers: HandlerDefinition[] = [
  {path: "/v1/auth", appInstance: authHandler}
]