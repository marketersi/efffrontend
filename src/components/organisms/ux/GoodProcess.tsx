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

  console.log(stage_1 , 'stage_1')

  useEffect(() => {
    const path = document.getElementById("mypath");
    if (!path) return;

    // Ensuring SVG path is loaded and visible before calculating length
    const checkSvgLoaded = setInterval(() => {
      if (path.getTotalLength() > 0) {
        clearInterval(checkSvgLoaded);

        const pathLength = path.getTotalLength();
        const spacing = 30;
        const numberOfCircles = Math.floor(pathLength / spacing);
        const leftOffset = 0;

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
                start: "top 82%",
                end: "bottom 160%",
                scrub: true,
                markers: false,
              },
              overwrite: "auto", // Make sure new animations overwrite previous ones
            });

            tl.fromTo(
              circles,
              { scale: 0.3, opacity: 0 },
              {
                scale: 1.8,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power1.in",
              }
            );
          }
        }, 500);
      }
    }, 50);
  }, []);

  return (
    <section ref={sectionRef} className="goodProcess" style={{ position: "relative" }}>
      <svg
        width="600"
        height="2400"
        viewBox="0 0 210 2430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ visibility: "hidden" }}
      >
        <path
          id="mypath"
          d="M100 0 S850 300, 100 1000, S-700 2100, 100 2400"
          stroke="black"
          fill="none"
          strokeMiterlimit="10"
        />
      </svg>

      <div className="circleBox">
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
              willChange: "transform, opacity",
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
        <div className="process1 processVideoOne">
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

      <div className="numberTwo topgapestart">
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

      <h1 className="afterImage">Przykłady <br /> Realizacji</h1>
    </section>
  );
};

export default GoodProcess;
