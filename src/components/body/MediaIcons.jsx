import React from "react";
import "./MediaIcons.css";
import logoGitHub from "../../assets/logoGitHub.png";
import logoLinkedin from "../../assets/logoLinkedin.png";

function MediaIcons() {
  return (
    <div className="media-icons">
      <a href="https://github.com" target="_blank" aria-label="GitHub">
        <img src={logoGitHub} alt="GitHub" />
      </a>
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <img src={logoLinkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default MediaIcons; 