import { z } from 'zod'

export const signInSchemea = z.object({
    identifier: z.string(),
    password: z.string(),
})