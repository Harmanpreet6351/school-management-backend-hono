import { z } from "zod/v4";


export const signInRequestSchema = z.object({
  email: z.email(),
  password: z.string()
  .min(4, "Password should have minimum length of 4")
})

export type SignInRequest = z.infer<typeof signInRequestSchema>