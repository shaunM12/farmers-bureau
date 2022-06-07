import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import Register from './Register'

export default function Navbar() {
    console.log(window.location)
    return (
        
        <nav className="nav">
            <a href="/" className="home-page">Farm & Food</a>
        <ul>
        <li>
            <a href="/register">Register Now</a>
        </li>
        </ul>
    </nav>
    
    )
}