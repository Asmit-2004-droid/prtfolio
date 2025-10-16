import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="Project"><Project/></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
