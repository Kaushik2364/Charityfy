// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Charity Logo" />
        <h2><a href='/' >Charitify</a></h2>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/causes" activeClassName="active">Causes</NavLink></li>
        <li><NavLink to="/events" activeClassName="active">Events</NavLink></li>
        <li><NavLink to="/pages" activeClassName="active">Pages</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
      <NavLink to="/donate">
        <button className="donate-btn">Donate Now</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;

