import React, { useState } from 'react';
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
} from '../styles/NavBar.style'
import LogoImg from '../images/HFF.png'

const NavBar = () => {
    const[extendNavBar, setExtendNavBar] = useState(false);
    return (
        <NavBarContainer extendNavBar={extendNavBar}>
            <NavbarInnerContainer>
            <LeftContainer> 
                <NavBarLinkContainer>
                    <NavBarLink to="/">Home</NavBarLink>
                    <NavBarLink to="/login">Login</NavBarLink>
                    <NavBarLink to="/register">Register</NavBarLink>
                    <NavBarLink to="/calendar">Calendar</NavBarLink>
                </NavBarLinkContainer>
                <OpenLinksButton
                onClick={() => {
                    setExtendNavBar((curr) => !curr);
                }}
                >
                    {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
                </OpenLinksButton>
            </LeftContainer>
            <Logo src={LogoImg}></Logo>
            <RightContainer> 
               
            </RightContainer>
            </NavbarInnerContainer>
            {extendNavBar && (
            <NavbarExtendedContainer> 
                <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
                <NavBarLinkExtended to="/login">Login</NavBarLinkExtended>
                <NavBarLinkExtended to="/register">Register</NavBarLinkExtended>
                <NavBarLinkExtended to="/calendar">Calendar</NavBarLinkExtended>
            </NavbarExtendedContainer>
            )}
        </NavBarContainer>

    )
}


export default NavBar