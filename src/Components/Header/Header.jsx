import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.style.css';

const Header = () => {
  

  return (

    <div className="header">
      <div className="logo">
          <a href="/"><h1 >HARIS</h1></a>
      </div>

      <Navbar/>
      
    </div>
  )
}

export default Header;
