import { z } from 'zod'

export const usernameValdiation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(20, "Username must be only 20 characters")
    .regex(/^[a-zA-Z0-9_]*$/, "Username must not contain speacial characters")

export const signUpSchemea = z.object({
    username: usernameValdiation,
    email: z.string().email({ message: 'Invalid Email Address' }),
    password: z.string().min(6, { message: "Password must be alteast 6 characters" })

})