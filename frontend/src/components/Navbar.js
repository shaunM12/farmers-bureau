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
} from '../styles/Navbar.style'
import LogoImg from '../images/HFF.png'


const NavBar = () => {
    const[extendNavBar, setExtendNavBar] = useState(false);
    return (
        <NavBarContainer extendNavBar={extendNavBar}>
            <NavbarInnerContainer>
            <LeftContainer> 
                <NavBarLinkContainer>
                    <NavBarLink to="/home">Home</NavBarLink>
                    <NavBarLink to="/register">Register</NavBarLink>
                    <NavBarLink to="/login">Login</NavBarLink>
                    <NavBarLink to="/articles">Articles</NavBarLink>
                    <NavBarLink to="/events">Events</NavBarLink>
                    <NavBarLink to="/addarticle">Add a New Article</NavBarLink>
                    <NavBarLink to="/markets">Farmer's Market</NavBarLink>
                    <NavBarLink to="/addmarket">Add a Farmer's Market</NavBarLink>
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
                    <NavBarLink to="/home">Home</NavBarLink>
                    <NavBarLink to="/register">Register</NavBarLink>
                    <NavBarLink to="/login">Login</NavBarLink>
                    <NavBarLink to="/articles">Articles</NavBarLink>
                    <NavBarLink to="/events">Events</NavBarLink>
                    <NavBarLink to="/addarticle">Add a New Article</NavBarLink>
            </NavbarExtendedContainer>
            )}
        </NavBarContainer>

    )
}


export default NavBar
