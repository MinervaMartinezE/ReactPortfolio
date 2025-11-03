import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <Link to="/projects" className="btn">
        Ver mis proyectos
      </Link>
    </section>
  );
}

export default Projects;
