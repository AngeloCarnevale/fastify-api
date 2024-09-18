import {z} from "zod"

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    HOST: z.string().min(4),
    PORT: z.string()
})

export const env = envSchema.parse(process.env)