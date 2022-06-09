import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import Register from './Register'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
    console.log(window.location)
    return (
        <div>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem',}} >
        
        <Link to="/register">Register</Link>
        <Link to="/registration">Registration</Link>
        </nav>
        <Outlet />
        </div>
    
    )
}