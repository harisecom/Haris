import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.style.css';
import {cartAction} from '../../Redux/cart/cart-action';
import {searchbarAction} from '../../Redux/searchbar/searchbar-action';


import { ReactComponent as AccountIcon} from '../../assets/account.svg';
import { ReactComponent as CartIcon} from '../../assets/cart.svg';
import { ReactComponent as SearchIcon} from '../../assets/search.svg';
import { ReactComponent as WishlishIcon} from '../../assets/wishlist.svg'
import { navbarAction } from '../../Redux/navbar/navbar-action';
 
const NavbarElements = ({ cartAction , searchbarAction, toggleNavbar, navbarStatus}) => {
    /* const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const clickDrop = () => setDropdown(!dropdown); */

    const location = useLocation();

    return ( 
            <div className="nav-elements">          
                <ul  >
                    <li className='' onClick={searchbarAction}><SearchIcon/> </li>
                    <li className=''><WishlishIcon/></li>
                    <li className='' onClick={cartAction}><CartIcon/> </li>
                    <li className=''  >
                        <AccountIcon/>
                    </li>
                    <li onClick={toggleNavbar}>
                        <i className={navbarStatus ?  'fas fa-times' :  'fas fa-bars'} />
                    </li>
                </ul>
            </div> 
    )
}

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction()),
    searchbarAction: () => dispatch(searchbarAction()),
    toggleNavbar: () => dispatch(navbarAction())
})

const mapSateToProps = state => ({
    navbarStatus: state.navbar.navbarStatus
})
 
export default connect(mapSateToProps, mapDispatchToProps)(NavbarElements);