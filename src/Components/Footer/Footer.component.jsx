import React from 'react';
import './Footer.styles.css'
const Footer = () => (
    <div className="container-fluid fixed-bottom">
        <hr/>
        <nav className="navbar navbar-light ">
            <div className="container">
                <span className="navbar-text">
                    Unlocking A Whole New Wardrobe.
                </span>
                <ul>
                    <li>
                        <a href="">about</a>
                    </li>
                    <li>
                        <a href="">blog</a>
                    </li>
                    <li>
                        <a href="">customer care</a>
                    </li>

                </ul>
                <div>
                    <a href=""><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a href=""><i className="fab fa-twitter fa-2x "></i></a>
                    <a href=""><i className="fab fa-instagram fa-2x "></i></a>
                    <a href=""><i className="fab fa-pinterest-p fa-2x "></i></a>
                    <a href=""><i className="fab fa-youtube fa-2x "></i></a>
                </div>
            </div>
            
        </nav>
    </div>
)

export default Footer;



