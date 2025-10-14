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
  const [index, setIndex] = useState(1);

  const toRotate = ["Frontend Developer."];
  const period = 2000; // pause after full word

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(80); // deleting speed
    } else {
      setDelta(40); // typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hello, I'm Elena, and I'm a`}
                    <br />
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer" ]'>
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
  <a href="https://mailto:filatovae047@gmail.com" className="social-link">
    <FaEnvelope size={20} />
  </a>
</div>
                </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="avatar-img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};