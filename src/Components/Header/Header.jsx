import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.style.css';

const Header = ({handleCart}) => {
  /* const clickcount = () =>{
    console.log("yapppppp");
  } */
  return (

    <div className="header">
      <div className="logo">
          <h1>HARIS</h1>
      </div>
      
      <Navbar handleCart={handleCart} />
      
    </div>
  )
}

export default Header;
