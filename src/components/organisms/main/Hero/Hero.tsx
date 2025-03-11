"use client";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/home/page";
import style from "./hero.module.css";
import $ from "jquery"; // Import jQuery

const Hero = () => {
  const { screenData } = useSelector((state: RootState) => state.home);
  
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const { heroSection } = screenData;
  console.log(heroSection , 'heroSection')

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animationVariantsLeft = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
    hidden: { opacity: 0.5, x: -200, y: 200, transition: { duration: 2 } },
  };
  const animationVariantsRight = {
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
    hidden: { opacity: 0.5, x: 200, y: 200, transition: { duration: 2 } },
  };


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Ensure jQuery selects the element correctly and triggers play
    $('#play').trigger('play');

  }, []);


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className={style.HerVideoOverlay}></div>
      {/* <ReactPlayer
        url={heroSection?.background_video}
        playing={true}
        loop={true}
        width="100%"
        height="auto"
        className={`${style.heroVideo} ${style.desktop}`}
        muted={true}
        pip={false}
        playsinline
      /> */}
{/* <ReactPlayer
key={new Date().toISOString()}
  url={heroSection?.background_video}
 // url='https://www.youtube.com/watch?v=dQw4w9WgXcQ?vq=small'
  playing={true}
  loop={true}
  width="100%"
  height="auto"
  className={`${style.heroVideo} ${style.desktop}`}
  muted={true}
  pip={false}
  playsinline={true}
  preload="auto"
  //controls={true}
  config={{
    file: {
      attributes: {
        preload: 'auto',
        controlsList: "nodownload",
        disablePictureInPicture: true,
        crossOrigin: "anonymous",
        autoPlay: true // Explicit autoplay attribute
      }
    }
  }}
/> */}

        <video
        id='play'
     
      src={heroSection?.background_video}
      //autoPlay
      loop
      muted
      playsinline
      style={{userSelect:'none'}}
      preload="metadata"
      className={`${style.heroVideo} ${style.desktop}`}
      onEnded={(e) => e.target.play()} // Ensures looping in Safari
      controlsList="nodownload"

    ><source src={heroSection?.background_video} type="video/mp4"></source></video>

      <ReactPlayer
        url={heroSection?.mobile_video}
        // url="https://marketersi.cdn.prismic.io/marketersi/ZvZWHrVsGrYSwD0c_hero-mobile-2.mp4"
        // url="https://marketersi.cdn.prismic.io/marketersi/ZvZlWbVsGrYSwD7E_hero-mobile-2-1--1-.mp4"
        playing={true}
        loop={true}
        width="100%"
        height="auto"
        className={`${style.heroVideo} ${style.mobile}`}
        muted={true}
        pip={true}
       // playsinline
        playsinline={true}
        preload="auto"
       // controls={true}
        config={{
          file: {
            attributes: {
              preload: 'auto',
              controlsList: "nodownload", 
              disablePictureInPicture: true,
               crossOrigin:"anonymous"
            }
          }
        }}
      />

      <div className={style.hero}>
        <Container>
          <h1>{heroSection?.title}</h1>
          <div className={style.subtitleContainer}>
            <h6>{heroSection?.subtitle}</h6>

            <p>{heroSection?.description}</p>
          </div>
          <div className={style.heroBtn}>
            <Link href="/cennik">
              <button>Wyceń usługę</button>
            </Link>
            <Link href="/konsultacja-marketingu" className={style.umow}>
              <span>Umów konsultację</span>
              {/* <motion.div
                className={style.heroPlay}
                initial="initial"
                animate="animate"
                variants={animationVariantsLeft}
              >
                <img src="/assets/images/play_arrow.svg" alt="" />
              </motion.div> */}
            </Link>
          </div>
          {/* <div className={style.heroBottomImg}>
            <div className={style.leftImg} ref={ref}>
              <motion.img
                src={heroSection?.image_left1}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg1}
                variants={animationVariantsLeft}
                initial="hidden"
                animate={controls}
              />
              <motion.img
                src={heroSection?.image_left2}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg2}
                variants={animationVariantsLeft}
                initial="hidden"
                animate={controls}
              />
            </div>
            <div className={style.rightImg}>
              <motion.img
                src={heroSection?.image_right1}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg3}
                variants={animationVariantsRight}
                initial="hidden"
                animate={controls}
              />
              <motion.img
                src={heroSection?.image_right2}
                alt="My Image"
                width="auto"
                height="auto"
                className={style.heroImg4}
                variants={animationVariantsRight}
                initial="hidden"
                animate={controls}
              />
            </div>
          </div> */}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
