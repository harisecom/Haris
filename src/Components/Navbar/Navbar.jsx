import React from 'react';
import { connect } from 'react-redux';
import './navbar.style.css';
import {cartAction} from '../../Redux/cart/cart-action';


import { ReactComponent as AccountIcon} from '../../assets/account.svg';
import { ReactComponent as CartIcon} from '../../assets/cart.svg';
import { ReactComponent as SearchIcon} from '../../assets/search.svg';
import { ReactComponent as WishlishIcon} from '../../assets/wishlist.svg'

const Navbar = ({ cartAction }) => {
    

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
                <li><AccountIcon/>  </li>
                <li onClick={cartAction}><CartIcon/> </li>
                <li><SearchIcon/> </li>
                <li><WishlishIcon/></li>
            </ul>
        </div>
    </div>
     );
}

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction())
})
 
export default connect(null, mapDispatchToProps)(Navbar);