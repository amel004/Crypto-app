import React from 'react';
import './Navbar.css'; 
import { FaHeart, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="/logoo.png" alt="Logo" className='logo' />
      <div className='nav-links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coins">Coins</NavLink>
        <NavLink to="/exchanges">Exchanges</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <FaHeart style={{ color: "red", width: "60px", cursor:"pointer" }} />
      </div>
      <NavLink to="/Wallet"><FaUser style={{ color: "white", width: "50px", cursor:"pointer" }} /></NavLink>
    </div>
  );
}

export default Navbar;
