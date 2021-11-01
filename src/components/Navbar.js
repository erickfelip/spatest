import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Lagoa Mall <i className="fas fa-shopping-cart"/>
                </Link>
            </div>
        </nav>
        </>     
    )
}

export default Navbar;