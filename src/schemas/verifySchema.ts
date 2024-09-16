import { z } from 'zod'

export const verifySchemea = z.object({
    code: z.string().length(6, { message: 'Verfication code must be 6 didgit' })
})