import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-s.png";
import { FaTelegramPlane, FaInstagram, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Левая часть */}
          <Col xs={12} sm={6} className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />
            <span className="footer-brand-text">
              <span className="footer-brand-white">Filatova</span>{" "}
              <span className="footer-brand-accent">Elena</span>
            </span>
          </Col>

          {/* Правая часть: соцсети + копирайт */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icons">
              <a
                href="https://t.me/elenafeela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.instagram.com/elena_feela_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="https://mailto:filatovae047@gmail.com">
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-copy">© 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};