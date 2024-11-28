import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/_navbar.scss'; // Importando os estilos SCSS

function Navbar() {
    // Estado para controlar a visibilidade do menu móvel
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Função para alternar a visibilidade do menu móvel
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Função para fechar o menu móvel
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
          
            <div className="navbar-title">PixelPlay Store</div>
            <ul className="nav-links-desktop">
                <li><Link to="/all-games">All GAMES</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'flex' : ''}`}>
                <button className="close" onClick={closeMenu}>
                    <i className="fa-solid fa-xmark"></i> 
                </button>
                <ul className="nav-links-mobile">
                    <li><Link to="/all-games" onClick={closeMenu}>All GAMES</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
                </ul>
            </div>

           
            <button className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>

           
            {isMobileMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

export default Navbar;