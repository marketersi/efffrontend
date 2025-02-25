"use client";

import React, { useRef } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import Link from "next/link";
import { useSelector } from "react-redux";
import useOsClass from "@/components/molecules/useOsClass";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./mark.module.css";

// Main MarkSide Component
const MarkSide = () => {
  const { screenData } = useSelector((state) => state.home);
  const companySection = screenData.companySection || {};
  const companyCard = screenData.companyCard || [];

  const osClass = useOsClass();

  const links1 = [
    { label: "Tworzenie stron i design UX", path: "/tworzenie-stron-i-design-ux" },
    { label: "Video marketing", path: "/video-marketing" },
    { label: "Kreatywny montaż wideo", path: "/kreatywny-montaz-wideo" },
  ];
  const links2 = [
    { label: "Treści i hasła sprzedażowe", path: "/tresci-i-hasla-sprzedazowe" },
    { label: "Projektowanie logo", path: "/projektowanie-logo" },
    { label: "Nazwa dla firmy", path: "/nazwa-dla-firmy" },
  ];
  const links3 = [
    { label: "Strategia marketingowa", path: "/strategia-marketingowa" },
    { label: "Konsultacja marketingu", path: "/konsultacja-marketingu" },
    { label: "Marketing międzynarodowy", path: "/" },
  ];

  return (
    <div>
      <Container>
        <Row className={style.gapRow}>
          <Col lg={4} md={12} className={style.gapRowCol}>
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
          <Col lg={4} md={12} className={style.midColumn}>
            <div className={style.mark}>
              <Image
                className={`${osClass} additional-class`}
                src={companySection?.image_1}
                alt="rating image"
                width="auto"
                height="auto"
              />
            </div>
            <Card data={companyCard[1]} links={links2} />
          </Col>
          <Col lg={4} md={12} className={`${style.gapRowCol}`}>
            <div className={style.mark}>
              <Image
                src={companySection?.image_3}
                alt="rating image"
                width="auto"
                height="auto"
                className={`${osClass} additional-class`}
              />
              <Card data={companyCard[2]} links={links3} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Card Component with Framer Motion Scroll Animation
const Card = ({ data, links }) => {
  const cardRef = useRef(null);

  // Use the useScroll hook to track the scroll position
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"], // when the card enters and leaves the viewport
  });

  // Use useTransform to map scrollYProgress to vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <motion.div
      ref={cardRef}
      className={style.markCard}
      style={{
        transition: "transform 0.3s ease-out", // Smooth transition for transform changes
        y, // Bind the y to the transformed scroll progress
      }}
    >
      <h3>{data?.main_title}</h3>
      <p>{data?.subtitle}</p>
      <ul>
        {links.map((e, i) => {
          return (
            <li key={i}>
              <Link href={e.path}>
              <span>{e.label}</span>
              <div className={style.playIcon}>
                <Image
                  src="/assets/images/play_arrow.svg"
                  alt="rating image"
                  width="auto"
                  height="auto"
                />
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default MarkSide;
