import React from 'react';
import { NavLink } from 'react-router-dom'


export default function NavList () {
    let activeStyle = {
        textDecoration: 'underline'
    }
    let activeClassName = 'underline'


return (

    <nav>
        <ul>
            <li>
                <NavLink to="register"
                style={({isActive}) => isActive ? activeStyle : undefined}> Register</NavLink>
            </li>
        </ul>
    </nav>

)

}