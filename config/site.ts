import { SiteConfig } from 'types'
import { env } from '@/env.mjs'

export const siteConfig: SiteConfig = {
  name: 'Taxonomy',
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: 'https://tx.shadcn.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/taxonomy',
  },
  logo: {
    id: 'logo-01',
    darkLogo: '/images/logo/dark-logo.png',
    darkLogoAlt: 'Header Logo',
  },
}
