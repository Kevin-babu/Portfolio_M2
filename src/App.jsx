import React, { useState } from "react";
import "./App.css";
import { useEffect, useRef } from "react";
import AnimatedSection from "./assets/components/AnimatedSection";
import GlowingTriangle from "./assets/components/GlowingTriangle";
import SolarSystem from "./assets/components/SolarSystem";

const projects = [
  {
    title: "LYRA",
    subtitle: "AI MUSIC ASSISTANT",
    image: "public/lyra.jpg",
  },
  // {
  //   title: "CONVERSATIONAL",
  //   subtitle: "AI ASSISTANT",
  //   image: "public/ai.jpg",
  // },
  // {
  //   title: "GENESYS CLOUD",
  //   subtitle: "AWS INTEGRATION",
  //   image: "public/genesys.jpg",
  // },
];

const skills = [
  { icon: "bi-filetype-py", name: "Python" },
  { icon: "bi-filetype-js", name: "JavaScript" },
  { icon: "bi-code-slash", name: "React" },
  { icon: "bi-node-plus", name: "Node.js" },
  { icon: "bi-cloud", name: "AWS" },
  { icon: "bi-box", name: "Docker" },
  { icon: "bi-diagram-3", name: "Genesys Cloud" },
  { icon: "bi-stars", name: "LLMs" },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : ""}`}>

      {/* HEADER */}
      <header className="header">

        <div className="logo">PORTFOLIO.</div>

        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* THEME TOGGLE */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          <span className={!darkMode ? "active" : ""}>
            <i className="bi bi-sun-fill"></i>
          </span>

          <span className={darkMode ? "active" : ""}>
            <i className="bi bi-moon-fill"></i>
          </span>
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-side-label">
          <span></span>
          <p>CONVERSATIONAL AI ENGINEER</p>
        </div>


        {/* HERO IMAGE */}

        <div className="hero-image">
          {/* <GlowingTriangle/> */}
        </div>


        {/* HERO NAME */}

        <div
          className="hero-name"
        >
          <h1>KEVIN BABU</h1>

          {/* <div className="hero-script">
            ENGINEER
          </div> */}
        </div>


        {/* HERO CONTENT */}

        <div className="hero-content">

          <div className="hero-intro">

            <h4>AI SOLUTIONS ENGINEER</h4>

            <h2>
              BUILDING INTELLIGENT{" "}
              <span>CONVERSATIONAL</span>
              {" "}EXPERIENCES.
            </h2>

            <div className="red-line"></div>

          </div>


          <div className="hero-description">

            <p>
              I design and build AI-powered solutions that
              automate customer interactions, simplify
              complex workflows, and deliver exceptional
              experiences.
            </p>

            <p>
              Specializing in Conversational AI, Genesys
              Cloud, AWS and modern web technologies.
            </p>

            <a href="#projects" className="red-button">
              VIEW MY WORK
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

      

      {/* ================= PROJECTS ================= */}

      {/* <section id="projects" className="projects">

        <div className="section-heading">

          <div className="script-text">
            Featured
          </div>

          <h2>PROJECTS</h2>

        </div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className={`project-card ${
                index === 0 ? "active-project" : ""
              }`}
              key={project.title}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <h3>{project.title}</h3>

                <p>{project.subtitle}</p>

                <span>
                  VIEW PROJECT →
                </span>

              </div>

            </div>

          ))}

        </div>

      </section> */}


      {/* ================= ABOUT ================= */}

      <section id="about" className="about">

        <div className="side-label">
          <span></span>
          {/* <p>ABOUT ME</p> */}
        </div>
  
        <div className="about-content">

          {/* <AnimatedSection> */}
          <div className="about-text">

            <div className="script-text red">
              Who I Am
            </div>

            <h2>
              SOLVING PROBLEMS
              <br />
              WITH AI & CLOUD.
            </h2>

            <p>
              With 3+ years of experience in Conversational AI,
              Cloud Integrations, and Contact Center Solutions,
              I help businesses automate customer interactions
              and deliver seamless customer experiences.
            </p>

            <a
              href="#experience"
              className="red-button"
            >
              MORE ABOUT ME
              <span>→</span>
            </a>

          </div>

          {/* </AnimatedSection> */}
          <div className="about-image">

            <div className="brush"></div>

            <img
              src="public/profile.jpg"
              alt="Kevin"
            />

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills">

        <div className="script-text red">
          Skills
        </div>

        <h2>TECH I WORK WITH</h2>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              className="skill"
              key={skill.name}
            >

              <i className={`bi ${skill.icon}`}></i>

              <span>{skill.name}</span>

            </div>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="stats"
      >

        <div className="stats-image">

          <SolarSystem />

        </div>

        <div className="stats-content">

          <div className="script-text red">
            By The Numbers
          </div>

          <h2>SOME COOL STATS</h2>

          <div className="stat-grid">

            <div>
              <strong>03+</strong>
              <span>YEARS EXPERIENCE</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>PROJECTS</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>PASSION</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>CURIOSITY</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>LEARNING</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= AI ================= */}

      {/* <section className="ai-section">

        <div className="ai-content">

          <div className="script-text red">
            Curious?
          </div>

          <h2>
            TALK TO
            <br />
            MY AI.
          </h2>

          <p>
            Ask anything about my experience, projects,
            technical skills or the kind of problems I solve.
          </p>

          <button className="red-button">
            <i className="bi bi-stars"></i>
            ASK MY AI
            <span>→</span>
          </button>

        </div>

      </section> */}


      {/* ================= FOOTER ================= */}

      <footer id="contact" className="footer">

        <div className="footer-brand">

          <div className="logo">
            KEVIN.
          </div>

          <p>
            Building AI solutions.
            <br />
            Delivering real impact.
          </p>

        </div>

        <div className="footer-column">

          <h4>QUICK LINKS</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>

        </div>

        <div className="footer-column">

          <h4>EXPERTISE</h4>

          <span>Conversational AI</span>
          <span>Genesys Cloud</span>
          <span>AWS</span>
          <span>Voice AI</span>
          <span>System Integrations</span>

        </div>

        <div className="footer-contact">

          <h4>LET'S CONNECT</h4>

          <p>
            Have a project in mind?
            I'd love to hear from you.
          </p>

          <a
            href="mailto:kevin.bbu@gmail.com"
            className="red-button"
          >
            GET IN TOUCH
            <span>→</span>
          </a>

        </div>

        <div className="copyright">
          © 2026 Kevin Babu. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;