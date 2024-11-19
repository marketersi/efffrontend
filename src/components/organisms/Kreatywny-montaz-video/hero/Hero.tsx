'use client';
import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import style from './hero.module.css';

const Hero = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const { heroSection } = screenData;

  return (
    <div>
      <ReactPlayer
        url={heroSection?.background_video}
        playing={true}
        loop={true}
        width="100%"
        height="auto"
        className={style.heroVideo}
        muted={true}
        pip={false}
        playsinline
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
              <button>Wyceń projekt</button>
            </Link>
            <div className={style.heroBtn2}>
              <Link href="/konsultacje">
                <span>Umów konsultację</span>
                <div className={style.heroPlay}>
                  <Image
                    src="/assets/images/play_arrow.svg"
                    width="100"
                    height="100"
                    alt="play icon"
                  />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
