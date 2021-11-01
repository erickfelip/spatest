import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true) 

    const handleClick = () => setClick(!click)
    const closeMobileMenu= () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);
    
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
                <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                
                </ul>
                {button && <Button buttonStyle="btn--outline">Cadastre-se</Button>}
            </div>
        </nav>
        </>     
    )
}

export default Navbar;

//menu-icon add evento para alterar o icone superior direito;//