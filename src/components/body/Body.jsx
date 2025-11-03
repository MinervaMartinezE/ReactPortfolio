import React from "react";
import Hero from "./Hero";
import MediaIcons from "./MediaIcons";
import Projects from "./Projects";
//import "./Body.css"; 

function Body() {
  return (
    <main className="bodyContainer">
      <Hero />
      <MediaIcons />
      <Projects />
    </main>
  );
}

export default Body;
