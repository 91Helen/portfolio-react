import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";
import project1 from "../assets/img/mock-1.png";
import project2 from "../assets/img/mock-2.png";
import project3 from "../assets/img/mock-3.png";
import project4 from "../assets/img/mock-4.png"; 
import project5 from "../assets/img/mock-5.png";
import project6 from "../assets/img/mock-6.png";


export const ProjectsSection = () => {
  const projects = [
    {
      title: "Recipe App",
      description: "React web app for searching recipes by keywords (ingredients or dish name) using the Edamam Recipe API.",
      imgUrl: project1,
      tags: ["React", "Edamam Recipe API", "JavaScript (ES6+)", "CSS"],
      github: "https://github.com/91Helen/recipe-for-netlify",
      netlify: "https://recipe-portfolio-my-project.netlify.app/",
    },
    {
      title: "Nutrition Analysis App",
      description: "The app uses the Edamam Recipe API and displays a list of recipes with calories, images, and ingredients.",
      imgUrl: project2,
      tags: ["React", "JavaScript (ES6+)", "API Ninjas Nutrition", "CSS"],
      github: "https://github.com/91Helen/api-ninjas-mine",
      netlify: "https://nutrition-analysis-ninjas.netlify.app/",
    },
    {
      title: "Weekly Meal Plan Ideas",
      description: "The app allows users to create, update, and manage weekly meal plans with ingredients. An example of building an interactive, user-friendly interface with real-world use cases. ",
      imgUrl: project3,
      tags: ["React", "Hooks", "LocalStorage", "UI library", "uuid","Git + GitHub"],
      github: "https://github.com/91Helen/meal-plan-thirteen",
      netlify: "https://weekly-meal-plan-ideas-project.netlify.app/",
    },
    {
      title: "Online Clothing Store ",
      description: "An online clothing store with category filtering (Dresses, Pants, Skirts, Shoes, Shirts). ",
      imgUrl: project4,
      tags: ["React", "JavaScript (ES6+)", "CSS", "Git + GitHub","SweetAlert2"],
      github: "https://github.com/91Helen/seventh-module-store-for-portfolio",
      netlify: "https://online-store-filtering-project.netlify.app/",
    },
    {
      title: "Speech therapy center FENIKS",
      description: "A responsive, modern landing page for a speech therapy center.  ",
      imgUrl: project5,
      tags: ["JavaScript (ES6+)", "CSS", "Git + GitHub", "SEO", "AOS + GSAP"],
      github: "https://github.com/91Helen/feniks-logoped",
      netlify: "https://feniks-logo.kz/",
    },
     {
      title: "Psychologist Landing Page",
      description: "Ready, fully functional, responsive Psychologist Landing Page",
      imgUrl: project6,
      tags: ["JavaScript (ES6+)", "SEO", "CSS", "GSAP", "Swiper.js slider"],
      github: "https://github.com/91Helen/Psychologist-landing-page",
      netlify: "https://psycholog-aliya.kz/",
    },
  ];

 
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    if (visibleCount === 3) {
      setVisibleCount(projects.length); 
    } else {
      setVisibleCount(3); 
    }
  };

  return (
    <section className="projects" id="projects">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={`projects-bx ${
              isVisible ? "animate__animated animate__fadeIn" : ""
            }`}
          >
            <h2>My Projects</h2>
            <p>
              Here are some of the projects I’ve built using React, APIs and
              modern front-end tools.
            </p>

            <div className="row">
              {projects.slice(0, visibleCount).map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="project-card">
                    <img src={project.imgUrl} alt={project.title} />
                    <div className="content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="project-tags">
                        {project.tags.map((tag, idx) => (
                          <span key={idx}>{tag}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.netlify}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Netlify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 🔹 See More button */}
              <div className="col-12 mt-4 text-center">
                <button onClick={handleSeeMore} className="cosmic-button">
                  {visibleCount === 3 ? "See More Projects" : "See Less"}
                </button>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
};