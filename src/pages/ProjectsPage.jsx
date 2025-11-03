import React from "react";
import "./ProjectsPage.css"; 
import ecommerceImg from "../assets/Ecommerce2.jpg";
import appmovilImg from "../assets/Appmovil.jpg";
import dashboardImg from "../assets/Dashboard.jpg";
import landingImg from "../assets/Landingpage.jpg";
import portfolioImg from "../assets/Portfolio.jpg";

function ProjectsPage() {
  return (
    <main className="portfolio">
      <div className="portfolioContainer">
        <h1>Mis proyectos</h1>
        <h2>
          Una selección de proyectos que demuestran mis habilidades y
          experiencia en desarrollo frontend y diseño de interfaces.
        </h2>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <img src={ecommerceImg} alt="Proyecto1" />
          <h3>E-commerce Moderno</h3>
          <p>
            Plataforma de comercio electrónico con carrito de compras, pagos
            integrados y panel de administración.
          </p>
          <ul className="tech-details">
            <li>React</li>
            <li>TypeScript</li>
            <li>Stripe</li>
            <li>Tailwind CSS</li>
          </ul>
        </article>

        <article className="project-card">
          <img src={appmovilImg} alt="Proyecto2" />
          <h3>App Móvil de Productividad</h3>
          <p>
            Aplicación de gestión de tareas con sincronización en tiempo real y
            notificaciones push.
          </p>
          <ul className="tech-details">
            <li>React Native</li>
            <li>Firebase</li>
            <li>Redux</li>
            <li>Expo</li>
          </ul>
        </article>

        <article className="project-card">
          <img src={dashboardImg} alt="Proyecto3" />
          <h3>Dashboard Analytics</h3>
          <p>
            Panel de control con visualización de datos, gráficos interactivos y
            reportes personalizables.
          </p>
          <ul className="tech-details">
            <li>Next.js</li>
            <li>Chart.js</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
          </ul>
        </article>

        <article className="project-card">
          <img src={landingImg} alt="Proyecto4" />
          <h3>Landing Page Interactiva</h3>
          <p>
            Landing page con animaciones, formularios dinámicos y optimización
            SEO.
          </p>
          <ul className="tech-details">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>GSAP</li>
          </ul>
        </article>

        <article className="project-card">
          <img src={portfolioImg} alt="Proyecto5" />
          <h3>Portfolio Personal</h3>
          <p>
            Portfolio online responsivo con proyectos, animaciones y secciones
            interactivas.
          </p>
          <ul className="tech-details">
            <li>React</li>
            <li>Framer Motion</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
          </ul>
        </article>
      </div>
    </main>
  );
}

export default ProjectsPage;
