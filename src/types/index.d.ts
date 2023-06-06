import { User } from '@prisma/client'
import type { Icon } from 'lucide-react'

import { Icons } from '@/src/components/icons'

export type SubNavItem = {
  id: string
  submenuTitle: string
  submenuPath: string
}

export type MegamenuItem = {
  id: string
  megamenuTitle: string
  megamenuPath: string
}

export type Megamenu = {
  id: string
  groupName: string
  groupItems: MegamenuItem[]
}

export type NavItem = {
  id?: number
  title: string
  href: string
  disabled?: boolean
  holderCName?: string
  submenuCName?: string
  headerSubmenu?: SubNavItem[]
  megamenuCName?: string
  headerMegamenu?: Megamenu[]
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  logo: {
    id: string
    darkLogo: string
    darkLogoAlt: string
  }
}

export type tHeaderMenu = {
  headerMenu: MainNavItem[]
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, 'stripeCustomerId' | 'stripeSubscriptionId'> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }
