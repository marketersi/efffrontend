"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const WebSite = () => {
  const { screenData } = useSelector((state) => state.ux);
  const websites = screenData.websites || [];

  const [scrollRotation, setScrollRotation] = useState(0);
  const [perspective, setPerspective] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPerspective(window.innerWidth * 1.3);

      const handleResize = () => {
        setPerspective(window.innerWidth * 1.3);
      };

      const handleScroll = () => {
        const rotationValue = window.scrollY / 20;
        if (scrollRotation < 1450) {
          setScrollRotation(rotationValue);
        }
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollRotation]);

  return (
    <>
      <section>
        <div id="ImageSection">
          <div>
            <h2>{websites?.title}</h2>
            <div
              style={{
                clipPath: "polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)",
                transform: `perspective(${perspective}px) rotateX(${scrollRotation}deg)`,
              }}
            >
              <picture className="img1">
                <img
                  style={{ height: 700, width: 950 }}
                  src={
                    scrollRotation > 810
                      ? websites?.image_2
                      : websites?.image_1
                  }
                  alt="Image 1"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebSite;
