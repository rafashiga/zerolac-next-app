import Link from 'next/link'
import React from 'react'

interface LinkProps {
  id: string
  href: string
}

const ButtonLink: React.FC<LinkProps> = ({ href, id, children }) => {
  return (
    <Link href={href}>
      <a id={id} className="link link--primary">
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
