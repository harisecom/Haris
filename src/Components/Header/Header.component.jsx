import React from 'react';
import Navbar from '../Navbar/Navbar.component';
import {Link} from 'react-router-dom';
import './header.style.css';

const Header = () => {
  

  return (

    <div className="header">
      <Link to="/">
      <div className="logo">
          <h1 >HARIS</h1>
      </div>
      </Link>

      <Navbar/>
      
    </div>
  )
}

export default Header;
