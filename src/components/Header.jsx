import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="headerContainer">
        <h2>MT</h2>
        <h1>Melisa Torres</h1>
        <button className="menu-toggle"></button>
        <nav className="main-nav">
          <Link to="/">Inicio</Link>
          <Link to="/projects">Proyectos</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
