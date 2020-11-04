import React from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.style.css';

const NavbarLinks = () => {

    const history = useHistory();
    return (

        <div className="nav-links">
            <ul>
                <li onClick={() => history.push('/shop')} >SHOP ALL</li>
                <li onClick={() => history.push('/shop')} >SHOP BY CATEGORY</li>
                <li onClick={() => history.push('/shop')} >BEST SELLERS</li>
                <li onClick={() => history.push('/shop')} >BRANDS</li>
            </ul>            
        </div>
    )
}

export default NavbarLinks
