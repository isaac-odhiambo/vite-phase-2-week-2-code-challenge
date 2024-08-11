// src/components/Navbar.js
import React from 'react';


function Navbar({ setView }) {
  return (
    <nav className="navbar">
      <button onClick={() => setView('home')} className="navbar-link">Home</button>
      <button onClick={() => setView('army')} className="navbar-link">Your Bot Army</button>
    </nav>
  );
}

export default Navbar;
