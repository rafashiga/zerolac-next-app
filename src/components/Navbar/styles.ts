import { rem } from 'polished'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

export const Nav = styled.nav`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #f0f0f0;
  /* box-shadow: 0 4px 12px -9px black; */
  justify-content: space-between;
  z-index: 9;

  .nav__logo {
    font-family: 'Pacifico', cursive;
    font-size: ${rem(32)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.screen.desktop}) {
    position: fixed;
  }
`

export const Container = styled.div`
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: ${rem(56)};

  @media (min-width: ${props => props.theme.screen.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.theme.container.desktop};
  }
`

export const NavList = styled(Scrollspy)`
  list-style: none;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  margin-left: ${rem(40)};

  .nav__item {
    cursor: pointer;
    padding: 0.85rem 0;
    font-size: 1.125rem;
    color: #606060;
    font-weight: 700;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: 4px solid ${props => props.theme.colors.primary};
    }
  }

  .nav__item.active {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }

  &.is-current a {
    padding: 0.85rem 0;
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
`
