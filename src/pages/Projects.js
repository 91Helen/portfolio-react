import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";
import { projects } from "../data"; // 👈 импортируем массив

export const ProjectsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => (prev === 3 ? projects.length : 3));
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
                        <a href={project.github} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                        <a href={project.netlify} target="_blank" rel="noreferrer">
                          Netlify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

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
