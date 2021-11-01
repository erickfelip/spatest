import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu= () => setClick(false)
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                Test<i className="fas fa-shopping-cart"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}> 
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}></ul>
                <li className="nav-item">
                    <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                    Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/stores" className="nav-links" onClick={closeMobileMenu}>
                    Lojas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                    Serviços
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                    Cadastre-se
                    </Link>
                </li>
            </div>
        </nav>
        </>     
    )
}

export default Navbar;

//menu-ico add evento para alterar o icone superior direito;//