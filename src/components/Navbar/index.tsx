import React, { useState } from 'react'
import Link from 'next/link'
import * as FaIcons from 'react-icons/fa'
import Sidebar from '../Sidebar'
import { Nav, Container, NavList, NavItem, SidebarButton } from './styles'

const Navbar: React.FC = () => {
  const [currentHash, setCurrentHash] = useState('')
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const showSidebar = () => setIsOpenSidebar(!isOpenSidebar)

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
    document.getElementById('btn-' + hash)?.focus()
  }

  return (
    <>
      <Nav>
        <Container>
          <Link href="/">
            <a className="nav__logo">Zerolac</a>
          </Link>
          <NavList
            items={[
              'inicio',
              'apresentacao',
              'leite',
              'intolerancia',
              'processo',
              'rotulo',
            ]}
            currentClassName="is-current"
          >
            <NavItem>
              <Link href="/#inicio">
                <a
                  onClick={() => handleNavLink('inicio')}
                  className="nav__item"
                >
                  início
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#apresentacao">
                <a
                  onClick={() => handleNavLink('apresentacao')}
                  className="nav__item"
                >
                  apresentação
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#leite">
                <a onClick={() => handleNavLink('leite')} className="nav__item">
                  leite
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#intolerancia">
                <a
                  onClick={() => handleNavLink('intolerancia')}
                  className="nav__item"
                >
                  intolerância
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#processo">
                <a
                  onClick={() => handleNavLink('processo')}
                  className="nav__item"
                >
                  processo
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/#rotulo">
                <a
                  onClick={() => handleNavLink('rotulo')}
                  className="nav__item"
                >
                  rótulo
                </a>
              </Link>
            </NavItem>
          </NavList>
          <SidebarButton onClick={showSidebar}>
            <FaIcons.FaBars />
          </SidebarButton>
        </Container>
        <Sidebar toggleSidebar={showSidebar} isOpen={isOpenSidebar} />
      </Nav>
    </>
  )
}

export default Navbar
