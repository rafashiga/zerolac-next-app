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
  justify-content: space-between;
  z-index: 9;
  position: fixed;

  .nav__logo {
    font-family: 'Pacifico', cursive;
    font-size: ${rem(32)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.container.mobile};
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: ${rem(56)};

  @media (min-width: ${props => props.theme.screen.desktop}) {
    width: ${props => props.theme.container.desktop};
  }
`

export const NavList = styled(Scrollspy)`
  list-style: none;

  display: none;

  @media (min-width: ${props => props.theme.screen.desktop}) {
    display: flex;
    align-items: center;
  }
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

export const SidebarButton = styled.button`
  font-size: 1.25rem;
  border: none;
  padding: 0.5rem;
  background: none;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: none;
  }
`
