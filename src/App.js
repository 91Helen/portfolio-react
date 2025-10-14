import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import { Loader } from "./components/Loader";
import { Banner } from "./pages/Banner";
import { Skills } from "./pages/Skills";
import { ProjectsSection } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import BubblesCSSBackground from "./components/BubblesCSSBackground";

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

/* === 📍 Контент приложения === */
function AppContent() {
  const location = useLocation();

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
    <div className="App">
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


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <BubblesCSSBackground />
      <AppContent />
    </Router>
  );
}

export default App;
