import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavBarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
    // background-color: black;
    display: flex;
    flex-direction: column;
    @media(min-width: 1000px) {
        height: 120px;

    }
`;  

export const LeftContainer = styled.div `
    flex: 50%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div `
    flex: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
`;

export const NavBarLinkContainer = styled.div `
    display: flex;
`

export const NavBarLink = styled (Link) `
    font-size: large;
    font-family: Poppins, sans-serif;
    text-decoration: none;
    margin: 10px;
    color: dark-grey; 
    padding-top: 30px;
    @media(max-width: 1000px) {
        display: none;
    }
`

export const NavBarLinkExtended = styled (Link) `
    font-size: large;
    font-family: Poppins, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const Logo = styled.img `
    display: block;
    margin: auto;
    max-width: 800px;
    height: auto;
    padding: 1rem;
`

export const OpenLinksButton = styled.button `
    width: 70px;
    height:120px;
    background: none;
    border: none;
    color: dark-grey;
    font-size: 45px;
    curser: pointer;

    @media(min-width: 1000px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6BA43A;
    background: opaque;
    @media (min-width: 1000px) {
        display: none;
    }
`
;