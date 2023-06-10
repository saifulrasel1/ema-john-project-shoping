import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
 return (
  <nav className='header'>
     <img src={logo} alt="" />
     <div>
      <a href="/Shop">Shop</a>
      <a href="/Orders">Orders</a>
      <a href="/Inventory">Inventory</a>
      <a href="/Login">Login</a>
     </div>
  </nav>
 );
};

export default Header;<h2>this is from header</h2>