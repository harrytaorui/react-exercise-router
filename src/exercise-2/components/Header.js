import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className='navbar'>
        <NavLink exact to='/' className='nav-link' activeClassName='active'>
          Home
        </NavLink>
        <NavLink exact to='/products' className='nav-link' activeClassName='active'>
          Products
        </NavLink>
        <NavLink exact to='/my-profile' className='nav-link' activeClassName='active'>
          My Profile
        </NavLink>
        <NavLink exact to='/about-us' className='nav-link' activeClassName='active'>
          About Us
        </NavLink>
      </div>
    </nav>
  )
}

export default Header;