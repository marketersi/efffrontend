import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { ModalForm } from "../tresci-sprzedazowe/ModalForm";

const UxVideo = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const UXVideo = screenData["UX-Video"] || {};

  const Videotab = UXVideo.Videotab || [];

  const [selectedTab, setSelectedTab] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef(null);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const duration = playerRef.current.getDuration();
        const currentTime = playerRef.current.getCurrentTime();
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
        document.documentElement.style.setProperty(
          "--progress",
          `${progress}%`
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selectedTab]);

  return (
    <>
      <section id="videoSection">
        <div>
          <h2
            className="textAnimation titleAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.title}
          </h2>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.paragraph_1}
          </p>
          <p
            className="textAnimation"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            {UXVideo?.paragraph_2}
          </p>
        </div>
        <div>
          {/* <div className="row">
            <div id="videos" className="col-lg-8">
              <img
                className="videoBg"
                src="https://propozycje.owocni.pl/ux/VideoUX.98555e54.46666926.png"
              />
              {Videotab.map((video:any) => (
                <React.Fragment key={video.id}>
                  {selectedTab === video.id && (
                    <ReactPlayer
                      ref={playerRef}
                      url={video.video}
                      playing={true}
                      loop={true}
                      muted={true}
                      width="auto"
                      height="auto"
                      playsinline
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="textWithArrow col-lg-4">
              <div className="textVideo">
                {Videotab.map((video:any) => (
                  <div
                    key={video.id}
                    className={selectedTab === video.id ? "active" : ""}
                    onClick={() => setSelectedTab(video.id)}
                  >
                    <h3
                      style={{
                        "--progress": `${
                          selectedTab === video.id ? progress : 0
                        }%`,
                      }}
                    >
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* <div className="para">
            <img
              className="sp"
              src="https://propozycje.owocni.pl/ux/sp.995a6077.webp"
              alt=""
              style={{ transform: "translate3d(0px, -2.9487px, 0px)" }}
            />
            <img
              className="dot1"
              src="https://propozycje.owocni.pl/ux/dot1.7781bcc1.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot2"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot3"
              src="https://propozycje.owocni.pl/ux/dot3.1e955529.webp"
              alt=""
              style={{ transform: "translate(0px, 0px)" }}
            />
            <img
              className="dot4"
              src="https://propozycje.owocni.pl/ux/dot2.e99cba48.webp"
              alt=""
              style={{ transform: "scale(0.5, 0.5)" }}
            />
          </div> */}
          <img src="https://images.prismic.io/marketersi/Zs63VEaF0TcGJcxA_Marketersi-10.png?auto=format,compress" alt="" className="uxvideoImg"/>
        </div>
      </section>
      <section>
        <div id="WhatGet">
          <p className="textAnimation">{UXVideo?.paragraph_3}</p>
          <p className="textAnimation">{UXVideo?.paragraph_4}</p>
          <p className="textAnimation">{UXVideo?.paragraph_5}</p>
          <a className="send-offer-button js--triggerAnimation">
            <span>
              <span onClick={() => setIsModal(true)}>
                {" "}
                {UXVideo?.button_text}
              </span>
            </span>
          </a>
          <h2 className="uxVideoTitle ">{GoodProcess.title}</h2>
          <p className="uxVideoPara">{GoodProcess.paragraph}</p>
        </div>
      </section>
      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default UxVideo;
