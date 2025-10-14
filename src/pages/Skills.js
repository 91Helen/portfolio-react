import React, { useState } from "react";
import physics from "../assets/img/physics.svg";
import github from "../assets/img/github.svg";
import api from "../assets/img/api.svg";
import ui from "../assets/img/ui.svg";
import figma from "../assets/img/figma.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";


import certificate1 from "../assets/certificates/certificate1.png";
import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
import certificate4 from "../assets/certificates/certificate4.png";

export const Skills = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const skillsData = [
    { img: physics, title: "React Js" },
    { img: github, title: "Git/GitHub" },
    { img: api, title: "API/Fetch/Axios" },
    { img: physics, title: "React Hooks" },
    { img: ui, title: "UI" },
    { img: figma, title: "FIGMA" },
    { img: html, title: "HTML" },
    { img: css, title: "CSS" },
  ];

  const certificates = [
    { img: certificate1, title: "Certificate 1" },
    { img: certificate2, title: "Certificate 2" },
    { img: certificate3, title: "Certificate 3" },
     { img: certificate4, title: "Certificate 4" },
  ];

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
      {/* Скрывается весь остальной контент, когда открыто модальное окно */}
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
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      {skillsData.map((skill, index) => (
                        <div className="item" key={index}>
                          <img src={skill.img} alt={skill.title} className={skill.title === "React Js" ? "physics" : ""} />
                          <h5>{skill.title}</h5>
                        </div>
                      ))}
                    </Carousel>

                    <h3 className="mt-2">My Certificates</h3>
                    <div className="certificates-grid">
                      {certificates.map((cert, index) => (
                        <div
                          className="certificate-card"
                          key={index}
                          onClick={() => openModal(index)}
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
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </div>

      {/* Модальное окно */}
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
