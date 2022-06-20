import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavBarContainer = styled.nav `
    width: 100%;
    height: 120px;
    background-color: #6BA43A;
    display: flex;
    flex-direction: column;

    @media(min-width: 700px) {
        height: 100px;
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
    height: 80px;
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
    padding-top: 10px;
    @media(max-width: 700px) {
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
    height: 50px;
    background: none;
    border: none;
    color: gray;
    font-size: 45px;
    curser: pointer;

    @media(min-width: 700px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;