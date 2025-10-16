import React, { useState, useRef, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import { gsap } from "gsap";
import colorSharp from "../assets/img/color-sharp.png";
import { projects } from "../data";

export const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));
  const cardsRef = useRef([]);

  const handleSeeMore = () => {
    if (visibleProjects.length === 3) {
      const newProjects = projects.slice(3);
      setVisibleProjects((prev) => [...prev, ...newProjects]);
    } else {
      setVisibleProjects(projects.slice(0, 3));
    }
  };

  useEffect(() => {
    let startIndex = 0;
    if (visibleProjects.length > 3) {
      startIndex = 3; 
    }
    const cardsToAnimate = cardsRef.current.slice(startIndex, visibleProjects.length);

    gsap.fromTo(
      cardsToAnimate,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, [visibleProjects]);

  return (
    <section className="projects" id="projects">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={`projects-bx ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
            <h2>My Projects</h2>
            <p>Here are some of the projects I’ve built using React, APIs and modern front-end tools.</p>

            <div className="row">
              {visibleProjects.map((project, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={project.title}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
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
                        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                        <a href={project.netlify} target="_blank" rel="noreferrer">Netlify</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 mt-4 text-center">
                <button onClick={handleSeeMore} className="cosmic-button">
                  {visibleProjects.length === 3 ? "See More Projects" : "See Less"}
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
