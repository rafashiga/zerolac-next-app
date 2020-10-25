import React, { useState } from 'react'
import Link from 'next/link'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'
import { MdBlock } from 'react-icons/md'

import { Nav, CloseButton, SidebarList, SidebarItem } from './styles'

interface SidebarProps {
  toggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => {
    setIsOpen(false)
  }

  return (
    <Nav>
      <SidebarList
        items={[
          '',
          'inicio',
          'apresentacao',
          'leite',
          'intolerancia',
          'processo',
          'rotulo',
        ]}
        currentClassName="active"
        offset={-64}
      >
        <SidebarItem>
          <CloseButton onClick={toggleSidebar}>
            <AiIcons.AiOutlineClose />
          </CloseButton>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#inicio">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <FiIcons.FiHome className="icon" /> início
            </a>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#apresentacao">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <FiIcons.FiInfo className="icon" />
              apresentação
            </a>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#leite">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <FiIcons.FiCoffee className="icon" /> leite
            </a>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#intolerancia">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <MdBlock className="icon" /> intolerância
            </a>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#processo">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <FiIcons.FiTruck className="icon" /> processo
            </a>
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/#rotulo">
            <a className="sidebar__link" onClick={toggleSidebar}>
              <FiIcons.FiBox className="icon" />
              rótulo
            </a>
          </Link>
        </SidebarItem>
      </SidebarList>
    </Nav>
  )
}

export default Sidebar
