import React from 'react';
import './Footer.styles.css'
const Footer = () => (
    <footer className="footer">
        <hr/>
        <div className="container-fluid">
            <nav className="navbar navbar-light " id="navbar">
                    <span className="navbar-text">
                        Unlocking A Whole New Skin Care.
                    </span>
                    <ul id="nav-links"> 
                        <li>
                            <a href="/">about</a>
                        </li>
                        <li>
                            <a href="/">blog</a>
                        </li>
                        <li>
                            <a href="/">customer care</a>
                        </li>

                    </ul>
                    <div>
                        <a href="/"><i className="fab fa-facebook-f fa-2x"></i></a>
                        <a href="/"><i className="fab fa-twitter fa-2x "></i></a>
                        <a href="/"><i className="fab fa-instagram fa-2x "></i></a>
                        <a href="/"><i className="fab fa-pinterest-p fa-2x "></i></a>
                        <a href="/"><i className="fab fa-youtube fa-2x "></i></a>
                    </div>
                
            </nav>
        </div>
    </footer>
)

export default Footer;