import Link from 'next/link'

type AnchorProps = {
  path?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  rel?: string
  target?: string
  href?: string
  as?: string
}

const Anchor = ({
  path,
  children,
  className,
  rel = 'noopener noreferrer',
  target = '_blank',
  onClick,
  ...rest
}: AnchorProps) => {
  if (!path) return null
  const internal = /^\/(?!\/)/.test(path)
  if (!internal) {
    const isHash = path.startsWith('#')
    if (isHash) {
      return (
        <a className={className} href={path} onClick={onClick} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <a
        rel={rel}
        className={className}
        href={path}
        target={target}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={path} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  )
}

Anchor.displayName = 'Anchor'

export default Anchor
