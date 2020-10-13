import Scrollspy from 'react-scrollspy'
import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 9;
  background: #fff;
  width: 100%;
  border-top: 2px solid #f0f0f0;
  overflow: hidden;

  @media (min-width: ${props => props.theme.screen.desktop}) {
    display: none;
    opacity: 0;
  }
`

export const Content = styled.div`
  min-height: ${rem(64)};
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  overflow-y: scroll;
`

export const List = styled(Scrollspy)`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Item = styled.li`
  a {
    color: #000;
    font-weight: 700;
    text-decoration: none;
    outline: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  &.active a {
    background: #000;
    color: #fff;
  }
`
