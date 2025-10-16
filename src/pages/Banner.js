import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/photo_2025-08-18_12-29-00-modified-removebg-preview.png";
import { FaTelegramPlane, FaInstagram, FaEnvelope } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(40); // typing speed

  const toRotate = ["Frontend Developer"];
  const period = 2000; // pause after full word

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(80);
      } else {
        setDelta(40);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };

    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta, isDeleting, loopNum]); 
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hello, I'm Elena, and I'm a`}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I specialize in building responsive, user-friendly web applications with React.
                    I enjoy creating clean code, intuitive interfaces, and modern designs.
                    I’m eager to contribute my skills to a professional team and grow as a developer
                    through new challenges and exciting projects.
                  </p>
                  <a 
                    href="/Filatova Elena's resume.pdf" 
                    download 
                    className="cv-btn"
                  >
                    Download CV 
                  </a>

                  {/* Соцсети под кнопкой */}
                  <div className="social-icons mt-3 d-flex gap-3">
                    <a href="https://t.me/elenafeela" target="_blank" rel="noreferrer" className="social-link">
                      <FaTelegramPlane size={20} />
                    </a>
                    <a href="https://www.instagram.com/elena_feela_/" target="_blank" rel="noreferrer" className="social-link">
                      <FaInstagram size={20} />
                    </a>
                    <a href="mailto:filatovae047@gmail.com" className="social-link">
                      <FaEnvelope size={20} />
                    </a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Portrait of Elena" className="avatar-img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};