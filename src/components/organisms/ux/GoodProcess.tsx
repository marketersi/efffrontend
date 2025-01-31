import useOsClass from "@/components/molecules/useOsClass";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};
  const osClass = useOsClass();
  const [circlePositions, setCirclePositions] = useState([]);
  const sectionRef = useRef(null);
  const numbercircle = 21;

  useGSAP(() => {
    const path = document.getElementById("mypath");
    if (!path) return;
  
    const pathLength = path.getTotalLength();
    const spacing = 40;
    const numberOfCircles = Math.floor(pathLength / spacing);
    const leftOffset = 40;
  
    let positions = [];
    for (let i = 0; i <= numberOfCircles; i++) {
      const distance = i * spacing;
      const point = path.getPointAtLength(distance);
      positions.push({ left: point.x + leftOffset, top: point.y });
    }
  
    setCirclePositions(positions);
  
    setTimeout(() => {
      const circles = document.querySelectorAll(".circle");
  
      if (circles.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: true,
            markers: false,
            
          },
        });
  
        tl.fromTo(
          circles,
          { scale: 0.3, opacity: 0, },
          {
            scale: 2.2,
            opacity: 1,
            duration: 1.5,
            stagger: 0.5, 
            ease: "power3.in",
          }
        );
      }
    }, 500);
  }, []);
  
  

  return (
    <section
      ref={sectionRef}
      className="goodProcess"
      style={{ position: "relative" }}
    >
      {/* Hidden SVG Path */}
      <svg
        width="100"
        height="2800"
        viewBox="0 0 200 2830"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ visibility: "hidden", position: "absolute" }}
      >
        <path
          id="mypath"
          d="
          M100 0
          S850 900, 100 1050 
          S-450 2500, 100 2430  
        "
          stroke="black"
          fill="none"
          stroke-miterlimit="10"
        />
      </svg>

      <div className="circleBox">
        {/* Circles */}
        {circlePositions.map((position, index) => (
           <div
           key={index}
           className="circle"
           style={{
             position: "absolute",
             left: `${position.left}px`,
             top: `${position.top}px`,
             width: "12px",
             height: "12px",
             backgroundColor: "#00BFFF",
             borderRadius: "50%",
           }}
         ></div>
        ))}
      </div>

      {/* GoodProcess Content */}
      <div className="numberOne">
      <div className="one numberimage">
        <div className="number">
          <img
            src="https://images.prismic.io/marketersi/Z30cjpbqstJ99Hnx_NUMBER1--versionwithoutbackground-.png?auto=format,compress"
            alt=""
          />
        </div>
      </div>
      <div className="process1">
        <div className={`one ${osClass}`}>
          <ReactPlayer
            url={stage_1?.video_url}
            playing
            loop
            muted
            className="processVideo"
            playsInline
          />
          <h3>{stage_1?.title}</h3>
          <p className="subtitle">{stage_1?.subtitle}</p>
          <p>{stage_1?.description}</p>
        </div>
      </div>
      </div>

      <div className="numberTwo">
      <div className="two numberimage2">
        <div className="number">
          <img
            src="https://images.prismic.io/marketersi/Z30cjZbqstJ99Hnv_NUMBER2--versionwithoutbackground-.png?auto=format,compress"
            alt=""
          />
        </div>
      </div>
      <div className="process2">
        <div className={`two ${osClass}`}>
          <ReactPlayer
            url={stage_2?.video_url}
            playing
            loop
            muted
            className="processVideo"
            playsInline
          />
          <h3>{stage_2?.title}</h3>
          <p className="subtitle">{stage_2?.subtitle}</p>
          <p>{stage_2?.description}</p>
        </div>
      </div>
      </div>
      <div className="numberThree">
      <div className="three numberimage3">
        <div className="number">
          <img
            src="https://images.prismic.io/marketersi/Z30cj5bqstJ99Hny_NUMBER3-versionwithoutbackground-.png?auto=format,compress"
            alt=""
          />
        </div>
      </div>
      <div className="process3">
        <div className="three order6">
          <img src={stage_3?.video_url} alt="" />
          <h3>{stage_3?.title}</h3>
          <p className="subtitle">{stage_3?.subtitle}</p>
          <p>{stage_3?.description}</p>
        </div>
      </div>
      </div>
      <h1 className="afterImage">
        Przykłady <br /> Realizacji
      </h1>
    </section>
  );
};

export default GoodProcess;
