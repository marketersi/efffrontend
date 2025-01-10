import useOsClass from "@/components/molecules/useOsClass";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GoodProcess = () => {
  const [trail, setTrail] = useState([]);
  const [scrollDir, setScrollDir] = useState("down");
  const goodProcessRef = useRef(null);
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};
  const osClass = useOsClass();

  useEffect(() => {
    let lastScrollY = 0;
    const section = goodProcessRef.current;

    // Check for section height
    const sectionHeight = section ? section.offsetHeight : 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Check if user is within the goodProcess section
      if (!section) return;
      const { top, bottom } = section.getBoundingClientRect();

      // Trigger animations only when section is in view
      if (top < window.innerHeight && bottom > 0) {
        const direction = currentScroll > lastScrollY ? "down" : "up";
        setScrollDir(direction);

        // Add a new arrow when scrolling down and the number of arrows is less than max
        if (direction === "down" && trail.length < Math.floor(sectionHeight / 50)) {
          setTrail((prevTrail) => [
            ...prevTrail,
            {
              id: Math.random(),
              x: window.innerWidth / 2 + Math.sin(currentScroll / 100) * 300, // Curved horizontal position
              y: currentScroll + window.innerHeight / 2, // Vertical position based on scroll
            },
          ]);
        }

        // Remove arrows when scrolling up
        if (direction === "up" && trail.length > 0) {
          setTrail((prevTrail) => prevTrail.slice(0, prevTrail.length - 1)); // Remove one arrow on scroll up
        }
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trail.length]); // Make sure the effect re-runs when `trail.length` changes

  const trailVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="goodProcess" ref={goodProcessRef}>
        {/* Trail dots animation */}
        {trail.map((item) => (
          <motion.div
            key={item.id}
            className="trail-arrow"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={trailVariants}
            style={{
              position: "absolute",
              top: item.y,
              left: item.x,
              width: 30,
              height: 30,
              pointerEvents: "none",
              zIndex: 9999,
              transition: "top 0.2s ease, left 0.2s ease", // Smooth transition for positions
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={scrollDir === "down" ? "#00bfff" : "#00bfff00"}
              width="30"
              height="30"
            >
              <path d="M12 21l-9-9h6V3h6v9h6l-9 9z" />
            </svg>
          </motion.div>
        ))}

        {/* GoodProcess Content */}
        <div className="one">
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
              playing={true}
              loop={true}
              muted={true}
              className="processVideo"
              playsinline
            />
            <h3>{stage_1?.title}</h3>
            <p className="subtitle">{stage_1?.subtitle}</p>
            <p>{stage_1?.description}</p>
          </div>
        </div>

        <div className="two">
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
              playing={true}
              loop={true}
              muted={true}
              className="processVideo"
              playsinline
            />
            <h3>Rozwój i Korzyści</h3>
            <p className="subtitle">{stage_2?.subtitle}</p>
            <p>{stage_2?.description}</p>
          </div>
        </div>
        <div className="three">
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
        <h1 className="afterImage">Przykłady Realizacji</h1>
      </section>

      <style jsx>{`
        .trail-arrow {
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default GoodProcess;
