import React, {useState} from 'react';
import { connect } from 'react-redux';
import './navbar.style.css';
import {cartAction} from '../../Redux/cart/cart-action';
import {searchbarAction} from '../../Redux/searchbar/searchbar-action';
import Dropdown from './Dropdown';


import { ReactComponent as AccountIcon} from '../../assets/account.svg';
import { ReactComponent as CartIcon} from '../../assets/cart.svg';
import { ReactComponent as SearchIcon} from '../../assets/search.svg';
import { ReactComponent as WishlishIcon} from '../../assets/wishlist.svg'
import { navbarAction } from '../../Redux/navbar/navbar-action';
 
const NavbarElements = ({ cartAction , searchbarAction, toggleNavbar, navbarStatus}) => {
    const [dropdown, setDropdown] = useState(false);
    const clickDrop = () => setDropdown(!dropdown);


    return ( 
            <div className="nav-elements">          
                <ul  >
                    <li className='' onClick={searchbarAction}><SearchIcon/> </li>
                    <li className=''><WishlishIcon/></li>
                    <li className='' onClick={cartAction}><CartIcon/> </li>
                    <li className='' onClick={clickDrop} >
                        <AccountIcon/>
                        {dropdown ? <Dropdown /> : null}

                    </li>
                    <li onClick={toggleNavbar}>
                        <i className={navbarStatus ?  'fas fa-times' :  'fas fa-bars'} />
                    </li>
                </ul>
                {dropdown ? <div className="dropdown-overlay" onClick={clickDrop}></div> : null}
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