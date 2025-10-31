import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footer-logo">
          <span className="logo-text">MT</span>
          <span className="full-name">Melisa Torres</span>
        </div>
        <p>¿Tienes un proyecto en mente?</p>
        <p>
          Estoy siempre interesada en nuevos proyectos y oportunidades.
          ¡Conectemos y hablamos sobre tu próxima idea!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
