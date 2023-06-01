import Link from "next/link";
import {siteConfig} from "@/config/site";

interface LogoProps {
  headerLogoClassName: string
  href: string
}

const Logo = ({headerLogoClassName, href}: LogoProps) => {
  return (<div className={`${headerLogoClassName}`}>
    <Link href={href} className="block">
      <img
        src={`${siteConfig.url}${siteConfig.logo.darkLogo}`}
        alt={siteConfig.logo.darkLogoAlt}
        width={120}
        height={30}
      />
    </Link>
  </div>)
}

export default Logo
