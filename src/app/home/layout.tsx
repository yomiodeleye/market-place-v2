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
  )
}
