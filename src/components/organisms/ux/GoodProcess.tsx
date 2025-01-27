import useOsClass from "@/components/molecules/useOsClass";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};
  const osClass = useOsClass();
  const [circlePositions, setCirclePositions] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const path = document.getElementById("mypath");
    const pathLength = path.getTotalLength();
    const spacing = 40; // Distance between circles
    const numberOfCircles = Math.floor(pathLength / spacing);
    const leftOffset = 90;

    let positions = [];
    for (let i = 0; i <= numberOfCircles; i++) {
      const distance = i * spacing;
      const point = path.getPointAtLength(distance);
      positions.push({ left: point.x + leftOffset, top: point.y  });
    }

    setCirclePositions(positions);

    // GSAP Animations
    const goodProcessSection = sectionRef.current;

    gsap.utils.toArray(".circle").forEach((circle) => {
      gsap.fromTo(
        circle,
        { scale: 1, opacity: 0.8 },
        {
          scale: 1.1,
          opacity: 1,
          scrollTrigger: {
            trigger: goodProcessSection, // Use the goodProcess section
            start: "top top", // Start when the section is in view
            end: "bottom bottom", // End when the section is out of view
            scrub: true,
            containerAnimation: goodProcessSection, // Use the section as the container
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="goodProcess"
      style={{ position: "relative" }}
    >
      {/* Hidden SVG Path */}
      <svg
        style={{ display: "none" }}
        width="563"
        height="1870"
        viewBox="0 0 563 2070"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="mypath"
          d="M390.62 0.110352C390.62 363.73 1098.15 885.79 390.62 1789.42C235.19 1981.3 -401.86 2681.68 390.62 3460.72C1139.92 4210.02"
          stroke="black"
          stroke-miterlimit="10"
        ></path>
      </svg>

      <div className="cricleBox">
        {/* Circles */}
      {circlePositions.map((position, index) => (
        <div
          key={index}
          className="circle"
          style={{
            position: "absolute",
            left: `${position.left}px`,
            top: `${position.top}px`,
            width: "20px",
            height: "20px",
            backgroundColor: "#00BFFF",
            borderRadius: "50%",
            transform: "scale(1)",
            opacity: 0.8,
          }}
        ></div>
      ))}
      </div>

      {/* GoodProcess Content */}
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
      <h1 className="afterImage">
        Przykłady <br /> Realizacji
      </h1>
    </section>
  );
};

export default GoodProcess;
