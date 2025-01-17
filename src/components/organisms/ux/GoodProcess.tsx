import useOsClass from "@/components/molecules/useOsClass";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GoodProcess = () => {
  const [trail, setTrail] = useState([]);
  const [scrollDir, setScrollDir] = useState("down");
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};
  const osClass = useOsClass();
  const [lastAddedScroll, setLastAddedScroll] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;
    const minDistance = 25;
    const removalDelay = 10; // Delay in ms for removing dots
    const trailTimeouts: any[] = [];
    let removalTimeout: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScrollY ? "down" : "up";
      setScrollDir(direction);

      if (
        direction === "down" &&
        currentScroll - lastAddedScroll > minDistance
      ) {
        setTrail((prev) => [
          ...prev,
          {
            id: Math.random(),
            x: window.innerWidth / 2 + Math.sin(currentScroll / 100) * 150,
            y: currentScroll + window.innerHeight / 3,
          },
        ]);
        setLastAddedScroll(currentScroll);
      } else if (direction === "up") {
        if (removalTimeout) clearTimeout(removalTimeout);
        removalTimeout = setTimeout(() => {-
          setTrail((prev) => {
            if (prev.length > 0) {
              const removedDot = prev[prev.length - 1];
              console.log("Removed dot:", removedDot);
              return prev.slice(0, prev.length - 1);
            }
            return prev;
          });
        }, removalDelay);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      trailTimeouts.forEach(clearTimeout);
    };
  }, [lastAddedScroll, trail]);

  const trailVariants = {
    initial: { opacity: 1, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 1, scale: 0.8, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section className="goodProcess" style={{position:"relative"}}>
        {/* AnimatePresence for trail dots */}
        <AnimatePresence>
          {trail
            .filter(
              (item) =>
                item.x >= 0 &&
                item.x <= window.innerWidth &&
                item.y >= window.scrollY 
            )
            .map((item) => (
              <motion.div
                key={item.id}
                className="trail-dot"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={trailVariants}
                style={{
                  position: "absolute",
                  top: `${item.y}px`,
                  left: `${item.x}px`,
                  width: 20,
                  height: 20,
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={scrollDir === "down" ? "#00bfff" : "#00bfff"}
              width="30"
              height="30"
            >
              <path d="M12 21l-9-9h6V3h6v9h6l-9 9z" />
            </svg>
          </motion.div>
            ))}
        </AnimatePresence>

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
        .trail-dot {
          pointer-events: none;
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default GoodProcess;
