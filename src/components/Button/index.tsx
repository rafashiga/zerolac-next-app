import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

export default Button
