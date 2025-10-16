import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";


import { skillsData, certificates } from "../data";

export const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevCertificate = () => {
    setSelectedIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCertificate = () => {
    setSelectedIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className={modalOpen ? "site-hidden" : ""}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`skill-bx ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <h2>My skills</h2>
                    <h5>Passionate Web Developer & Tech Creator</h5>
                    <p>
                      With over 3 years of experience in web development, I specialize in creating responsive,
                      accessible, and performant web applications using modern technologies. I'm passionate about
                      creating elegant solutions to complex problems and constantly learning new techniques.
                    </p>
                    <Carousel responsive={responsive} infinite className="skill-slider">
                      {skillsData.map((skill, idx) => (
                        <div className="item" key={`${skill.title}-${idx}`}>
                          <img
                            src={skill.img}
                            alt={skill.title}
                            className={skill.title === "React Js" ? "physics" : ""}
                          />
                          <h5>{skill.title}</h5>
                        </div>
                      ))}
                    </Carousel>

                    <h3 className="mt-2">My Certificates</h3>
                    <div className="certificates-grid">
                      {certificates.map((cert, idx) => (
                        <div
                          className="certificate-card"
                          key={`${cert.title}-${idx}`}
                          onClick={() => openModal(idx)}
                        >
                          <img src={cert.img} alt={cert.title} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
      </div>

      {modalOpen && (
        <div className="certificate-modal">
          <button className="modal-close" onClick={closeModal}>×</button>
          <button className="modal-prev" onClick={prevCertificate}>‹</button>
          <img
            src={certificates[selectedIndex].img}
            alt={certificates[selectedIndex].title}
            className="modal-img"
          />
          <button className="modal-next" onClick={nextCertificate}>›</button>
        </div>
      )}
    </section>
  );
};
