import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.style.css';
import Dropdown from './Dropdown';
import {cartAction} from '../../Redux/cart/cart-action';


import { ReactComponent as AccountIcon} from '../../assets/account.svg';
import { ReactComponent as CartIcon} from '../../assets/cart.svg';
import { ReactComponent as SearchIcon} from '../../assets/search.svg';
import { ReactComponent as WishlishIcon} from '../../assets/wishlist.svg'
import userReducer from '../../Redux/user/user-reducer';
 
const Navbar = ({ cartAction }) => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const clickDrop = () => setDropdown(!dropdown);

    const location = useLocation();

    return ( 
        <nav className="navbar">
             <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div> 
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
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
                    <li className=''  onClick={clickDrop} >
                        <Link to={location.pathname} className="" onClick={closeMobileMenu}>
                            <AccountIcon/>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='' onClick={cartAction}><CartIcon/> </li>
                    <li className=''><SearchIcon/> </li>
                    <li className=''><WishlishIcon/></li>
                </ul>
            </div> 
        </nav>
    );
}

const mapDispatchToProps = dispatch => ({
    cartAction: () => dispatch(cartAction())
})
 
export default connect(null, mapDispatchToProps)(Navbar);