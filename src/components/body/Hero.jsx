import React from "react";
import "./Hero.css";
import profesionalWoman from "../../assets/profesionalWoman.jpg";

function Hero() {
  return (
       <div className="heroContainer">
        <img src={profesionalWoman} alt='image'/>
        <div className="textContainer">
            <p>Hola, soy Melisa Torres.<br/>
             Desarrolladora Frontend</p>
            <p>Apasionada por crear experiencias digitales excepcionales. Especializada en React, TypeScript y diseño de interfaces modernas. Transformo ideas en productos digitales que impactan.</p>
        </div>
      </div>
  );
}

export default Hero;