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
            <Link href="/#inicio">
              <a className="nav__item">início</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#apresentacao">
              <a className="nav__item">apresentação</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#leite">
              <a className="nav__item">leite</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#intolerancia">
              <a className="nav__item">intolerância</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#processo">
              <a className="nav__item">processo</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#rotulo">
              <a className="nav__item">rótulo</a>
            </Link>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

export default Navbar
