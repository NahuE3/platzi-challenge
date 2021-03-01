import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #b42469;
  padding: 10px;
  align-items: center;
`

export const Logo = styled(LinkRouter)`
  display: flex;
  width: 150px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`

export const Nav = styled.nav`
  display: flex;
`

export const Link = styled(LinkRouter)`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 0 15px;
  & svg, p {
    padding: 2px 0;
    color: #fff;
  }
  & span, svg {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  & span {
    display: flex;
    justify-content: center;
    background-color: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-left: 25px;
    margin-bottom: 20px;
    align-items: center;
    align-self: flex-start;
    font-size: small;
    font-weight: bold;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
  color: #fff;
  padding: 8px;
`

export const Divider = styled.div`
  border: 1px solid #fff;
`
