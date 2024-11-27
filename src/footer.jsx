import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './css/_footer.scss'; // Importando os estilos SCSS

function Footer(){
return (
     <div className="footer-content">
                <p>&copy; 2024 PIXELPlay Store ©.</p>
                <p>All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i
                            className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i
                            className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i
                            className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i
                            className="fa-brands fa-linkedin"></i></a>
                </div>

            </div>
    )
}
export default Footer;