'use client';

import React, { useEffect, useState } from 'react';
import style from './mark.module.css';
import { Row, Col, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useOsClass from '@/components/molecules/useOsClass';

const MarkSide = () => {
  const { screenData } = useSelector((state) => state.home);
  const companySection = screenData.companySection || {};
  const companyCard = screenData.companyCard || [];

  const osClass = useOsClass();

  const links1 = [
    {
      label: 'Tworzenia stron i design UX',
      path: '/projektowanie-ux',
    },
    {
      label: 'Profesjonalne nagrywanie filmów',
      path: '/profesjonalne-nagrywanie-filmow',
    },
    {
      label: 'Kreatywny montaż video',
      path: '/Kreatywny-montaz-video',
    },
  ];
  const links2 = [
    {
      label: 'Treści i hasła sprzedażowe',
      path: '/tresci-sprzedazowe',
    },
    {
      label: 'Projektowanie logo',
      path: '/projektowanie-logo',
    },
    {
      label: 'Nazwa dla firmy',
      path: '/nazwa-dla-firmy',
    },

  ];
  const links3 = [
    {
      label: 'Strategia marketingowa',
      path: '/strategia-marketingowa',
    },

    {
      label: 'Konsultacja marketingu',
      path: '/konsultacje',
    },
    {
      label: 'Marketing międzynarodowy',
      path: '/',
    },
  ];

  return (
    <div>
      <Row className="m-0">
        <Col lg={4} className={osClass}>
          
            
            <ReactPlayer
            url={companySection?.image_2}
            playing={true}
            loop={true}
            width="auto"
            height="auto"
            className={style.markVideo}
            muted={true}
            pip={false}
            playsinline={true}
          />
            <Card data={companyCard[0]} links={links1} />
          
        </Col>
        <Col lg={4} >
        <div className={style.mark}>
        <Image
            className={osClass}
              src={companySection?.image_1}
              alt="rating image"
              width="auto"
              height="auto"
              // className={style.markImg1}
            />
            </div>
          <Card data={companyCard[1]} links={links2} />
        </Col>
        <Col lg={4}>
          <div className={style.mark}>
            <Image
              src={companySection?.image_3}
              alt="rating image"
              width="auto"
              height="auto"
            />
            <Card data={companyCard[2]} links={links3} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MarkSide;

const Card = ({ data, links }) => {
  const slideAnimationTop: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'ease',
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        className={style.markCard}
        initial="offscreen"
        whileInView="onscreen"
        variants={slideAnimationTop}
      >
        <h3>{data?.main_title}</h3>
        <p>{data?.subtitle}</p>
        <ul>
          {links.map((e, i) => {
            return (
              <li key={i}>
                <Link href={e.path}>{e.label}</Link>
                <div className={style.playIcon}>
                  <Image
                    src="/assets/images/play_arrow.svg"
                    alt="rating image"
                    width="auto"
                    height="auto"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};
