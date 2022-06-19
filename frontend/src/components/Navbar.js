import React, { useState } from 'react'
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavBarLinkContainer,
  NavBarLink,
  Logo,
  OpenLinksButton,
  NavBarLinkExtended,
} from '../styles/Navbar.style'
import LogoImg from '../images/HFF.png'

const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false)

  //to erase the login taken
  const handleLogout = () => {
    localStorage.removeItem('tokenAccess')
    window.location.reload()
  }

  //to switch the "login" and "logout" buttons depending on the logged status
  var logButton = ""
  if(localStorage.length == 0) { 
    logButton = <NavBarLink to="/login">Login</NavBarLink>
  } else {
    logButton = <NavBarLink to="/" onClick={handleLogout}>Logout</NavBarLink>
  }

  return (
    <NavBarContainer extendNavBar={extendNavBar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
        </LeftContainer>

        <RightContainer>
          <NavBarLinkContainer>
            {/* <NavBarLink to="/login">Login</NavBarLink> */}
            {logButton}
            <NavBarLink to="/articles">Home</NavBarLink>
            <NavBarLink to="/register">Register</NavBarLink>
            <NavBarLink to="/events">Events</NavBarLink>
            <NavBarLink to="/addarticle">Add a New Article</NavBarLink>
            <NavBarLink to="/markets">Farmer's Market</NavBarLink>
            <NavBarLink to="/addmarket">Add a Farmer's Market</NavBarLink>
          </NavBarLinkContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavBar((curr) => !curr)
            }}
          >
            {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavBar && (
        <NavbarExtendedContainer>
          <NavBarLinkExtended to="/articles" onClick>Home</NavBarLinkExtended>
          <NavBarLinkExtended to="/register" onClick>Register</NavBarLinkExtended>
          <NavBarLinkExtended to="/login" onClick>Login</NavBarLinkExtended>
          <NavBarLinkExtended to="/events" onClick>Events</NavBarLinkExtended>
          <NavBarLinkExtended to="/addarticle" onClick>
            Add a New Article
          </NavBarLinkExtended>
          <NavBarLinkExtended to="/markets" onClick>Farmer's Market</NavBarLinkExtended>
          <NavBarLinkExtended to="/addMarket" onClick>Add a Farmer's Market</NavBarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavBarContainer>
  )
}

export default NavBar
