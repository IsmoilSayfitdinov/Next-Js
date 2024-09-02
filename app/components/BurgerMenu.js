"use client"

import React from "react";
import { useState } from "react";
function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div style={{ padding: '16px' }}>
        <button className="menu-button-open" onClick={toggleMenu} style={{ fontSize: '24px' }}>
        ☰
        </button>
      </div>
      <div className="menu" style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        color: 'white',
        textAlign: 'center',
        paddingTop: '40px'
      }}>
        <button className="close-button" onClick={toggleMenu} style={{ fontSize: '24px' }}>
          {isOpen ? '✕' : '☰'}
        </button>
        <ul className="menu-items" style={{ listStyleType: 'none', padding: 0}}>
          <li style={{ marginBottom: '20px' }}><a href="/" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Home</a></li>
          <li style={{ marginBottom: '20px' }}><a href="/about" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>About</a></li>
          <li style={{ marginBottom: '20px' }}><a href="/post" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Post</a></li>
          <li style={{ marginBottom: '20px' }}><a href="/contact" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Contact</a></li>
        </ul>
        <ul className="menu-items" style={{ listStyleType: 'none', padding: 0}}>
          <li style={{ marginBottom: '20px' }}><a href="/login" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Login</a></li>
          <li style={{ marginBottom: '20px' }}><a href="/register" onClick={toggleMenu} style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>Register</a></li>
        </ul>
      </div>
    </div>
  );
}


export default BurgerMenu