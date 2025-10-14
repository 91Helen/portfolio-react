import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from "../assets/img/logo-s.png";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // === Изменение стиля при скролле ===
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Закрытие меню при клике вне его ===
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    if (expanded) document.addEventListener("click", handleClickOutside);
    else document.removeEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [expanded]);


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };

 
  const scrollToTop = () => {
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    setExpanded(false);
  };

  return (
    <Navbar
      ref={navRef}
      expand="lg"
      variant="dark"
      fixed="top"
      expanded={expanded}
      className={`navbar-scroll ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* === ЛОГОТИП === */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          onClick={() => setExpanded(false)}
        >
          <img
            src={logo}
            alt="Logo"
            width="42"
            height="42"
            className="d-inline-block align-top me-2"
          />
          <span className="brand-text">
            <span className="brand-white">Filatova</span>{" "}
            <span className="brand-accent">Elena</span>
          </span>
        </Navbar.Brand>

        {/* === БУРГЕР/крестик === */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`custom-toggler ${expanded ? "open" : ""}`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </Navbar.Toggle>

       
        <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? "show" : ""}`}>
          <Nav className="ms-auto">
            <NavDropdown title="Home" id="home-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/" onClick={scrollToTop}>
                Home Page
              </NavDropdown.Item>
              <NavDropdown.Item onClick={scrollToContact}>
                Contact
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
