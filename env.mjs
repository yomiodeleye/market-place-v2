import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  server: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1)

  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_SWELL_STORE_ID: z.string().min(1),
    NEXT_PUBLIC_SWELL_PUBLIC_KEY: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SWELL_STORE_ID: process.env.NEXT_PUBLIC_SWELL_STORE_ID,
    NEXT_PUBLIC_SWELL_PUBLIC_KEY: process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY
  }
})
