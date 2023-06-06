import Link from 'next/link'

import { marketingConfig } from '@/config/marketing'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { SiteFooter } from '@/components/site-footer'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <div className="home-collection relative bg-white sm:mb-[745px] lg:mb-[515px]">
        {children}
      </div>
    </>
    // <div className="flex min-h-screen flex-col">
    //   <header className="container z-40 bg-background">
    //     <div className="flex h-20 items-center justify-between py-6">
    //       <MainNav items={marketingConfig.mainNav} />
    //       <nav>
    //         <Link
    //           href="/login"
    //           className={cn(
    //             buttonVariants({ variant: 'secondary', size: 'sm' }),
    //             'px-4',
    //           )}
    //         >
    //           Login
    //         </Link>
    //       </nav>
    //     </div>
    //   </header>
    //   <main className="flex-1">{children}</main>
    //   <SiteFooter />
    // </div>
  )
}
