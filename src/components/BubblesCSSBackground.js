// src/components/BubblesCSSBackground.js
import React, { useEffect, useMemo, useRef } from "react";

const BubblesCSSBackground = ({ count = 20 }) => { // можно 24–36
  const wrapRef = useRef(null);

  const bubbles = useMemo(() => {
    const rand = (a, b) => a + Math.random() * (b - a);
    return Array.from({ length: count }, () => ({
      size: rand(1, 5),          // 🔹 мелкие
      left: rand(0, 100),         // %
      duration: rand(18, 36),     // плавнее
      delay: -rand(0, 6),        // рассинхрон
   hue: rand(260, 320),        // фиолетово-розовые светящиеся

      depth: rand(0.05, 0.25),    // параллакс
      opacity: rand(99.00, 99.00),  // 🔹 еле заметные
    }));
  }, [count]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const mx = ((e.clientX - w / 2) / w) * 90; // поменьше тянется
      const my = ((e.clientY - h / 2) / h) * 90;
      el.style.setProperty("--mx", `${mx}px`);
      el.style.setProperty("--my", `${my}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="bubbles-bg" ref={wrapRef} aria-hidden="true">
      {bubbles.map((b, i) => (
        <span
          key={i}
          style={{
            "--size": `${b.size}px`,
            "--left": `${b.left}%`,
            "--duration": `${b.duration}s`,
            "--delay": `${b.delay}s`,
            "--hue": b.hue,
            "--depth": b.depth,
            "--opacity": b.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default BubblesCSSBackground;