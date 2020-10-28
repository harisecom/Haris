import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {cartAction} from '../../Redux/cart/cart-action';
import {searchbarAction} from '../../Redux/searchbar/searchbar-action';
import {accountbarAction} from '../../Redux/accountbar/accountbar-action'
import './navbar.style.css';


import { ReactComponent as AccountIcon} from '../../assets/account.svg';
import { ReactComponent as CartIcon} from '../../assets/cart.svg';
import { ReactComponent as SearchIcon} from '../../assets/search.svg';
import { ReactComponent as WishlishIcon} from '../../assets/wishlist.svg'
 
const Navbar = ({ cartAction ,currentUser, searchbarAction, accountbarAction}) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const clickDrop = () => setDropdown(!dropdown);

    return ( 
        <nav className="navbar">
            <div className='menu-icon' onClick={handleClick}>
                
            </div> 
            
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                {currentUser ? (
                    <span className='username-block'>Hi, {currentUser.displayName}</span>
                ) : ('')
                }
                <ul className="nav-menu-items" onClick={handleClick} >
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>SHOP ALL</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>SHOP BY CATEGORY</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>BEST SELLERS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>BRANDS</Link>
                    </li>
                </ul>
            </div>
            <div>         
                <ul className="nav-icons" >
                    <li className='' onClick={accountbarAction}><AccountIcon/></li>
                    <li className='' onClick={cartAction}><CartIcon/> </li>
                    <li className='' onClick={searchbarAction}><SearchIcon/> </li>
                    <li className=''><WishlishIcon/></li>
                </ul>
            </div> 
        </nav>
    );
}

const mapStateToProp = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction()),
    searchbarAction: () => dispatch(searchbarAction()),
    accountbarAction: () => dispatch(accountbarAction()),
})
 
export default connect( mapStateToProp, mapDispatchToProps)(Navbar);