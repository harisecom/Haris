import React from 'react';
import './navbar.style.css';

const Navbar = ({handleCart}) => {
    return ( 
        <div className="navbar">
            <div className="nav-links">
                <ul>
                    <li>SHOP ALL</li>
                    <li>SHOP BY CATEGORY</li>
                    <li>BEST SELLERS</li>
                    <li>BRANDS</li>
                </ul>
            </div>
            

        <div className="nav-elemnets">
            <ul>
                <li><img src="images/account.svg" alt="account"/></li>
                <li onClick={() => handleCart()} ><img src="images/cart.svg" alt="account"/></li>
                <li><img src="images/search.svg" alt="account"/></li>
                <li><img src="images/wishlist.svg" alt="account"/></li>
            </ul>
        </div>
    </div>
     );
}
 
export default Navbar;