import React from 'react'

import { Container, Content } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>
          Desenvolvido por{'  '}
          <a href="http://rafashiga.github.io/" target="_blank">
            Rafael Shiga
          </a>
        </span>
      </Content>
    </Container>
  )
}

export default Footer
