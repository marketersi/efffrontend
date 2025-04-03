"use client";
import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import style from "./hero.module.css";

const Hero = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const { heroSection } = screenData;
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handlePlayVideo = () => {
    if (playerRef.current) {
      const videoElement = playerRef.current.getInternalPlayer();
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className={style.heroSection}>
      <ReactPlayer
        ref={playerRef}
        url={heroSection?.background_video}
        playing={isPlaying}
        loop={true}
        width="100%"
        height="auto"
        className={style.heroVideo}
        muted={false}
        pip={false}
        playsinline
        controls={isPlaying}
      />
      <div className={style.videoButtonFix}>
      <p>Kliknij, by obejrzeć z dźwiękiem</p>
      <div className={style.youtubeIcon} onClick={handlePlayVideo}>
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
  );
};

export default Hero;