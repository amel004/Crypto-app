import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FaHeart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';



const Navbar = () => {
  return (
  <div className='navbar'>
    <img src="/logoo.png" alt="" className='logo' />
    <ul>
      <li>Home</li>
      <li>Coins</li>
      <li>Exchanges</li>
      <li>About us</li>
      <FaHeart style={{color:"red", width:"50px"}} /> 
    </ul>
    <FaUser  style={{color:"white", width:"50px"}}/>

  </div>
  );
}

export default Navbar;
