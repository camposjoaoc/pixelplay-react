import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/_navbar.scss';

// Navbar component
function Navbar() {

    // State to track mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggles the mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Closes the mobile menu
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Navigation hook for programmatic redirection
    const navigate = useNavigate();

    // Redirect to home
    const goToHome = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">

            {/* Title redirects to home */}
            <div className="navbar-title" onClick={goToHome}>PixelPlay Store</div>

            {/* Desktop navigation links */}
            <ul className="nav-links-desktop">
                <li><Link to="/all-games">All GAMES</Link></li>
                <li><Link to="/miscellaneous">MISCELLANEOUS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li>
                    <Link to="/cart" className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </li>
            </ul>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'flex' : ''}`}>
                {/* Close button for mobile menu */}
                <button className="close" onClick={closeMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <ul className="nav-links-mobile">
                    {/* Links close the menu after navigation */}
                    <li><Link to="/all-games" onClick={closeMenu}>All GAMES</Link></li>
                    <li><Link to="/miscellaneous">MISCELLANEOUS</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
                    <li><Link to="/cart">CART</Link></li>
                </ul>
            </div>

            {/* Hamburger button toggles mobile menu */}
            <button className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Overlay closes the menu when clicked */}
            {isMobileMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

export default Navbar;
