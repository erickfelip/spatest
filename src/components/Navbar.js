import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Lagoa Mall <i className="fas fa-shopping-cart"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}> 
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </div>
        </nav>
        </>     
    )
}

export default Navbar;

//menu-ico add evento para alterar o icone superior direito;//