import type { ZodError } from "zod/v4"


export const parseZodError = (e: ZodError) => e.issues.map(i => i.message)