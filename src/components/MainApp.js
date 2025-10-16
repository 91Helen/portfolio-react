import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import NavBar from "../components/NavBar";
import { Banner } from "../pages/Banner";
import { Skills } from "../pages/Skills";
import { ProjectsSection } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Footer } from "../components/Footer";
import BubblesCSSBackground from "../components/BubblesCSSBackground";
import { IntroLogo } from "./IntroLogo";

function AppContent({ visible }) {
  const location = useLocation();
  const contentRef = useRef(null);


  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".banner, .skills, .projects, .contact, footer",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [visible]);

 
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  return (
    <div
      className="App"
      ref={contentRef}
      style={{
        opacity: 0,
        transition: "opacity 0.8s ease-out",
      }}
    >
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Contact />
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsSection />} />
      </Routes>
      <Footer />
    </div>
  );
}


export const MainApp = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const introRef = useRef(null);

  
  useEffect(() => {
    const timer = setTimeout(() => {
     
      gsap.to(introRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setShowIntro(false);
          setShowContent(true);
        },
      });
    }, 1300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
   
      <BubblesCSSBackground />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {showIntro && (
          <div
            ref={introRef}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent", 
              zIndex: 20,
            }}
          >
            <IntroLogo />
          </div>
        )}

        {showContent && <AppContent visible={showContent} />}
      </div>
    </Router>
  );
};
