"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./zigzag.module.css";

gsap.registerPlugin(ScrollTrigger);

const ZigZagDots = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const dots = gsap.utils.toArray(".dot");
    gsap.set(dots, { opacity: 0, y: 50 });

    const timelines = dots.map((dot, i) =>
      gsap
        .timeline({
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .to(dot, {
          opacity: 1,
          y: 0,
          x: i % 2 === 0 ? 50 : -50, // Alternate left and right
          duration: 0.5,
          ease: "power1.out",
        })
        .to(dot, {
          x: 0,
          duration: 0.3,
          ease: "power1.in",
        })
    );

    return () => {
      // Kill all ScrollTriggers and timelines
      timelines.forEach((tl) => tl.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={style.container} ref={containerRef}>
      {Array.from({ length: 150 }).map((_, index) => (
        <div key={index} className="dot"></div>
      ))}
    </div>
  );
};

export default ZigZagDots;
