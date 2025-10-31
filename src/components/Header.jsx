import React from 'react'
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="headerContainer">
        <h2>MT</h2>
        <h1>Melisa Torres</h1>
        <button className="menu-toggle"></button>
        <nav className="main-nav">
          <a href="index.html">Inicio</a>
          <a href="projects.html">Proyectos</a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
