import React from 'react'
import "./Navbar.css"



const Navbar = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='logo'>
          <img src="/Logo.png"  />
        </div>
        <ul className='shortcuts'>
          <li>Home</li>
          <li>Coins</li>
          <li>Exchanges</li>
          <li>About us</li>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          width="24px"
          height="24px"
          >
         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
         </svg>
       
        </ul>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="gray"
      width="24px"
      height="24px"
    >
    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.31 0-10 1.67-10 5v3h20v-3c0-3.33-6.69-5-10-5z" className='user-icon'/>
    </svg>

      </nav>
      
    </div>
  )
}

export default Navbar

