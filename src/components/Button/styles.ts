import { darken, rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.5rem 1rem;
  font-size: ${rem(19)};
  color: #fff;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => darken(0.04, theme.colors.primary)};
  transition: background 0.2s;

  :hover {
    background: ${({ theme }) => darken(0.09, theme.colors.primary)};
  }
`
