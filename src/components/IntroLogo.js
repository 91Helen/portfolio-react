import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/img/logo-s.png";


export const IntroLogo = ({ onComplete }) => {
  const logoRef = useRef(null);
  const nameRef = useRef(null);
  const bgRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete,
  });

  tl.to(bgRef.current, { opacity: 1, duration: 0.6 })

    .fromTo(
      logoRef.current,
      { scale: 0.3, opacity: 0, rotate: -15 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.2 }
    )

    
    .fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.8"
    )

    .to([logoRef.current, nameRef.current], {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      delay: 0.1,
      ease: "power2.inOut",
    })

 
    .to(
      bgRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "sine.inOut",
      },
      "-=0.6" 
    );
}, [onComplete]);

  return (
    <div ref={bgRef} className="intro-logo">
      <img ref={logoRef} src={logo} alt="Logo" className="intro-logo-img" />
      <div ref={nameRef} className="intro-name">
        <span className="white">Filatova</span>
        <span className="violet">Elena</span>
      </div>
    </div>
  );
};
