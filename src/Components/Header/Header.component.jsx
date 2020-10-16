import React, { useState } from 'react';
import NavbarLinks from '../Navbar/NavbarLinks.component';
import NavbarElements from '../Navbar/NavbarElements.component'
import { Link, useHistory } from 'react-router-dom';
import './header.style.css';
import Searchbar from '../Search-Bar/Searchbar.component';
import { connect } from 'react-redux';
import { navbarAction } from '../../Redux/navbar/navbar-action';
import { auth } from '../../firebase/firebase.utils';

const Header = ({user, navbarStatus, navbarToggle}) => {

  const history = useHistory();

  const [myAccountDD, setmyAccountDD] = useState(false);

  return (

    <div className="header">

      <div className="header-mobileSize">

        <div className={navbarStatus ? 'nav-menu active' : 'nav-menu'}>

          <div className="mobile-header-title">
            <h1>HARIS</h1>
          </div>

          <ul className="nav-menu-items">

            {
              user ? <li className={myAccountDD ? 'my-account-mobile-active' : 'mobile-menu-myaccount'} onClick={() => setmyAccountDD(!myAccountDD)}>
                <i class="fas fa-user"></i>  My Account <span> <i class="fas fa-caret-right"></i></span>
                <ul className={myAccountDD ? 'mobile-menu-myaccount-active' : ''}> 
                  <li>My Profile</li>
                  <li>My Orders</li>
                  <li onClick={() => auth.signOut()}>Sign out</li>
                </ul>
            </li> :
                <>
                  <li onClick={() => {history.push('/login'); navbarToggle() } } ><i class="fas fa-sign-in-alt"></i> Login</li>

                  <li onClick={() =>{history.push('/register'); navbarToggle() } } ><i class="fas fa-user-plus"></i> Register</li>
                </>
            }





            <li className=''><i class="fas fa-heart"></i>Wislisted</li>

            <li onClick={() => {history.push('/shop'); navbarToggle() }}>
              <i class="fas fa-shopping-bag"></i> Shop All
            </li>

            <li onClick={() => {history.push('/shop'); navbarToggle() }}>
              <i class="fas fa-folder"></i> Shop by Category
            </li>

            <li onClick={() => {history.push('/shop'); navbarToggle() }}> 
              <i class="fas fa-copyright"></i> Shop by Brands
            </li>
          </ul>
        </div>
      </div>


      <div className="header-fullSize">
        <Link to="/">
          <div className="logo">
            <h1 >HARIS</h1>
          </div>
        </Link>
        <NavbarLinks />
        <NavbarElements />
        <Searchbar></Searchbar>
      </div>



    </div>
  )
}

const mapStateToProps = ({user, navbar}) => ({
  user: user.currentUser,
  navbarStatus : navbar.navbarStatus
  
})

const mapDispatchToProps = dispatch => ({
  navbarToggle : () => dispatch(navbarAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);