import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
  width: 100%;
  //height: ${(props) => (props.extendNavBar ? '100vh' : '115px')};
  background-color: #6ba43a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 900px) {
    height: 115px;
  }
`

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
`

export const NavBarLinkContainer = styled.div`
  display: flex;
`

export const NavBarLink = styled(Link)`
  font-size: large;
  font-family: Poppins, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: dark-grey;

  @media (max-width: 900px) {
    display: none;
  }
`

export const NavBarLinkExtended = styled(Link)`
  font-size: large;
  font-family: Poppins, sans-serif;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 400px;
  height: auto;
  padding: 1rem;
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 62px;
  background: none;
  border: none;
  color: dark-grey;
  font-size: 45px;
  curser: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    display: none;
  }
`
