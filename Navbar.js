import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar " >
      <div className="logo">Real Estate</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;