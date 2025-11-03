/*import { useState } from 'react'*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import './styles/global.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
