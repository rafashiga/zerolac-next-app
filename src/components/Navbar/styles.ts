import { rem } from 'polished'
import styled from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
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

export const NavList = styled.ul`
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
    color: #000;
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
`
