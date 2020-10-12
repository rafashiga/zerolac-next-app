import React, { useState } from 'react'
import Link from 'next/link'
import { FiHome, FiInfo, FiCoffee, FiBox, FiTruck } from 'react-icons/fi'
import { MdBlock } from 'react-icons/md'

import { Container, Content, List, Item } from './styles'

const Tabbar: React.FC = () => {
  const [currentHash, setCurrentHash] = useState('')

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
    document.getElementById('btn-' + hash)?.focus()
  }

  return (
    <Container>
      <Content>
        <List>
          <Item>
            <Link href="/#inicio">
              <a
                onClick={() => handleNavLink('inicio')}
                className={`${currentHash === 'inicio' ? 'active' : ''}`}
              >
                <FiHome />
                início
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/#apresentacao">
              <a
                onClick={() => handleNavLink('apresentacao')}
                className={`${currentHash === 'apresentacao' ? 'active' : ''}`}
              >
                <FiInfo /> apresentação
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/#leite">
              <a
                onClick={() => handleNavLink('leite')}
                className={`${currentHash === 'leite' ? 'active' : ''}`}
              >
                <FiCoffee /> leite
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/#intolerancia">
              <a
                onClick={() => handleNavLink('intolerancia')}
                className={`${currentHash === 'intolerancia' ? 'active' : ''}`}
              >
                <MdBlock />
                intolerância
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/#processo">
              <a
                onClick={() => handleNavLink('processo')}
                className={`${currentHash === 'processo' ? 'active' : ''}`}
              >
                <FiTruck /> processo
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/#rotulo">
              <a
                onClick={() => handleNavLink('rotulo')}
                className={`${currentHash === 'rotulo' ? 'active' : ''}`}
              >
                <FiBox /> rótulo
              </a>
            </Link>
          </Item>
        </List>
      </Content>
    </Container>
  )
}

export default Tabbar
