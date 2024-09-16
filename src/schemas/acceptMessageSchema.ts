import { z } from 'zod'

export const acceptMessageSchemea = z.object({
    acceptMessage: z.boolean()
})