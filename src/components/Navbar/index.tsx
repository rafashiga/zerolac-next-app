import React, { useState } from 'react'
import Link from 'next/link'

import { Nav, Container, NavList, NavItem } from './styles'

const Navbar: React.FC = () => {
  const [currentHash, setCurrentHash] = useState('')

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
    document.getElementById('btn-' + hash)?.focus()
  }

  return (
    <Nav>
      <Container>
        <Link href="/">
          <a className="nav__logo">Zerolac</a>
        </Link>
        <NavList>
          <NavItem>
            <Link href="/#inicio">
              <a
                onClick={() => handleNavLink('inicio')}
                className={`nav__item  ${
                  currentHash === 'inicio' ? 'active' : ''
                }`}
              >
                início
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#apresentacao">
              <a
                onClick={() => handleNavLink('apresentacao')}
                className={`nav__item  ${
                  currentHash === 'apresentacao' ? 'active' : ''
                }`}
              >
                apresentação
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#leite">
              <a
                onClick={() => handleNavLink('leite')}
                className={`nav__item  ${
                  currentHash === 'leite' ? 'active' : ''
                }`}
              >
                leite
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#intolerancia">
              <a
                onClick={() => handleNavLink('intolerancia')}
                className={`nav__item  ${
                  currentHash === 'intolerancia' ? 'active' : ''
                }`}
              >
                intolerância
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#processo">
              <a
                onClick={() => handleNavLink('processo')}
                className={`nav__item  ${
                  currentHash === 'processo' ? 'active' : ''
                }`}
              >
                processo
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#rotulo">
              <a
                onClick={() => handleNavLink('rotulo')}
                className={`nav__item  ${
                  currentHash === 'rotulo' ? 'active' : ''
                }`}
              >
                rótulo
              </a>
            </Link>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

export default Navbar
