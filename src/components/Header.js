import React from 'react';
import { Link } from 'gatsby';
import './Header.css';

const Header = () => (
  <header className="nav-bar">
    <div className="logo">Go Trip</div>
    <ul className="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tours">Tours</Link></li>
      <li><Link to="/package">Package</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </header>
);

export default Header;
