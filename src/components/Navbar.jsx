import React, { useState } from 'react';
import './Navbar.css';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container flex">
        <a href="/" className="navbar-logo">Sameep Shah</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">{isOpen ? '✕' : '☰'}</span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#projects">Projects</a></li>
          <li className="navbar-item"><a href="#work">Work</a></li>
          <li className="navbar-item"><a href="#extracurriculars">Extracurrculars</a></li>
          <li className="navbar-item"><a href="#interests">Interests</a></li>
          <li className='navbar-item'><a href='#contactme'>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
