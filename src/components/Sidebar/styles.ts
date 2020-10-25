import Scrollspy from 'react-scrollspy'
import styled from 'styled-components'

export const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 40vw;
  height: 100vh;
  background: #fff;
  border-left: 1px solid #f0f0f0;
  box-shadow: 0 4px 15px -9px black;
  overflow: hidden;
  transition: 0.5s;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.screen.desktop}) {
    display: none;
  }
`

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const SidebarList = styled(Scrollspy)`
  list-style: none;
`

export const SidebarItem = styled.li`
  padding: 0 1rem;
  display: flex;

  &.active a {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  .sidebar__link {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    min-width: 100%;
    color: #000;
    text-decoration: none;
    font-weight: 700;

    .icon {
      margin-right: 0.6rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
  }
`
