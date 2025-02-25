"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "./video.module.css";
import { useSelector } from "react-redux";
import useOsClass from "@/components/molecules/useOsClass";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Video = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const { brandSection } = screenData;

  const [width, setWidth] = useState('100%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setWidth('70%');
      } else {
        setWidth('90%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = brandSection?.banner_video;
    video.preload = "auto";
    video.oncanplaythrough = () => setVideoUrl(video.src);
  }, [brandSection?.banner_video]);
  

  const [isPopupOpen, setPopupOpen] = useState(false);
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useGSAP(() => {
    const element = videoRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { scale: 1, skewY: -5 },
        {
          scale: 2.2,
          skewY: 0,
          duration:2.5,
          ease: "sine.out",
          scrollTrigger: {
            trigger: element,
            start: "top 100%", // Starts when the top of the element hits 80% of the viewport
            end: "top 35%",
            scrub: 1, // Smooth animation while scrolling
            
          },
        }
      );
    }
  }, []);

  const openPopup = () => {
    console.log("callledddddddd")
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const osClass = useOsClass();

  return (
    <>
      <div className="container">
        <div
          className={`${style.mainVideoDiv}`}
          ref={videoRef}
        >
          <div className={`${osClass} bannerVideoMain`}>
          <ReactPlayer
    url={videoUrl || brandSection?.banner_video}
    playing={true}
    loop={true}
    muted={true}
    width="100%"
    height="auto"
    pip={false}
    playsinline
  />
            <div className={style.youtubeIcon} onClick={openPopup}>
              <svg
                className="h-[60%] w-full"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M240 128C240.007 130.716 239.31 133.388 237.978 135.756C236.647 138.123 234.725 140.105 232.4 141.51L88.32 229.65C85.8909 231.138 83.1087 231.95 80.2608 232.002C77.4129 232.055 74.6025 231.347 72.12 229.95C69.6611 228.575 67.6128 226.57 66.1856 224.141C64.7585 221.712 64.0041 218.947 64 216.13V39.8701C64.0041 37.053 64.7585 34.2877 66.1856 31.8588C67.6128 29.4299 69.6611 27.4249 72.12 26.0501C74.6025 24.6536 77.4129 23.9451 80.2608 23.9979C83.1087 24.0506 85.8909 24.8626 88.32 26.3501L232.4 114.49C234.725 115.895 236.647 117.877 237.978 120.245C239.31 122.612 240.007 125.284 240 128Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className={`popup-content ${osClass}`}>
            

          <ReactPlayer
      url={brandSection?.banner_video}
      playing={true}
      loop={true}
      muted={false}
      width={width}
      height="auto"
      className="popupVideo"
      style={{ borderRadius: "12.7687px", margin: "auto", border: "0", overflow:"hidden"}}
      pip={false}
      controls={true}
      onMouseEnter={() => setShowCloseBtn(true)}
      onMouseLeave={() => setShowCloseBtn(false)}
      playsinline
    />
             {showCloseBtn && (
              <>  <button className="close-btn" onClick={closePopup}>
              X
            </button>
            </>
        
        )}
        <div className="closebtn-div" onMouseEnter ={() => {console.log("Hertyugujhgyufgu");setShowCloseBtn(true)}} onMouseLeave={() => setShowCloseBtn(false)}></div>
          </div>
        </div>
      )}

       <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1111;
        }

        .popup-content {
          overflow: auto;
          position:relative;
        }

        .close-btn {
          position: absolute;
          top: -8px;
          right:0.5%;
          background:transparent;
          color: white;
          border: none;
          border-radius: 5px;
          padding:5px;
          cursor: pointer;
          font-weight: 500;
          display:none;
        }

        

        .popup-content:hover .close-btn{display:block}
        
        @media (max-width: 1520px) {
        .bannerVideoMain{width:495px !important; max-width: 495px !important;}
        }

        @media (max-width: 600px) {
          .bannerVideoMain{width: 160px !important; max-width: 160px !important; height:auto; left:0; right:0; transform: translate(0, 0);}
          .hero_heroVideo__Mgtsk video{display:block;}
          .popupVideo{border-radius:15px !important; border: 1px solid #fff !important; width: 90% !important;}
          
        }
         .closebtn-div{position: absolute;
          top: 0px;
          right:12.5%;
          background:transparent;
          color: white;
          border: block;
          border-radius: 5px;
          padding:5px;
          width:30px;
          height:30px;
          cursor: pointer;
          font-weight: 900;
          }

        /* Default width for mobile view */
        .video-container {
          width: 100%;
        }
        /* Width for web view (screen width greater than 768px) */
        @media (min-width: 768px) {
          .video-container {
            width: 70%;
            margin: auto; /* Center the video player */
          }

           .close-btn {
          position: absolute;
          top: 0px;
          right:12.5%;
          background:transparent;
          color: white;
          border: none;
          border-radius: 5px;
          padding:5px;
          cursor: pointer;
          font-weight: 500;
          display:none;
        }

         
        }

        

      `}</style>

      
    </>
  );
};

export default Video;
