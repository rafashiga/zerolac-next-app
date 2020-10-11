import React from 'react'
import Link from 'next/link'

import { Nav, Container, NavList, NavItem } from './styles'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Container>
        <Link href="/">
          <a className="nav__logo">Zerolac</a>
        </Link>
        <NavList>
          <NavItem>
            <Link href="/">
              <a className="nav__item">Zerolac</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <a className="nav__item">Zerolac</a>
            </Link>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

export default Navbar
