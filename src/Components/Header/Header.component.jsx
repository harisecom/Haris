import React from 'react';
import Navbar from '../Navbar/Navbar.component';
import {Link} from 'react-router-dom';
import './header.style.css';
import Searchbar from '../Search-Bar/Searchbar.component';

const Header = () => {
  

  return (

    <div className="header">
      <Link to="/">
      <div className="logo">
          <h1 >HARIS</h1>
      </div>
      </Link>

      <Navbar/>
      <Searchbar></Searchbar>
      
      
    </div>
  )
}

export default Header;