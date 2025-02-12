import React, { useEffect, useState } from 'react';
import './customer-rating.css';
import { Variants, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Stars from '@/components/molecules/Ratings';

const CustomerRating = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { ratingSection } = screenData || {};
  const { CustomerReview } = ratingSection || {};

  const slideAnimationTop: Variants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: -25,
      opacity: 1,
      transition: {
        type: 'ease',
        bounce: 0.4,
        damping: 25,
        stiffness: 70,
        duration: 0.9,
      },
    },
  };

  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function isMobile() {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  }

  return (
    <section className="container">
      <div className="brand-img-container">
        <img src={ratingSection?.brand_image_1} alt="" />
        {/* to be deleted */}
        {/* <img src={ratingSection?.barnd_image_2} alt="" /> */}
      </div>
      <p className=" brand-description">
        {ratingSection?.rating_text}
        {<Stars rating={ratingSection?.rating} />}
      </p>

      {!mobile && (
        <div className="d-sm-flex justify-content-center align-items-center">
          <p className="emphasized-text">
            <em>{CustomerReview?.review}</em>
          </p>
          <div className="mx-sm-5">
            <p>
              <strong className="text-color">{CustomerReview?.name}</strong>
              <br />
              {CustomerReview?.designation}
              <br />
              {CustomerReview?.company}
            </p>
            <p></p>
          </div>
        </div>
      )}

      {mobile && (
        <div className="cr_mobile_layout">
          <div className="mx-sm-5">
            <p>
              <strong className="text-color">{CustomerReview?.name}</strong>
              <br />
              {CustomerReview?.designation}
              <br />
              {CustomerReview?.company}
            </p>
            <p></p>
          </div>
          <p className="emphasized-text">
            <em>"{CustomerReview?.review}"</em>
          </p>
        </div>
      )}

      <div className="image-container">
        <img
          src={ratingSection?.rating_image_1}
          alt=""
          className="percentage-gif"
          style={{ backgroundColor: '#f4f4f4' }}
        />
        <motion.img
          src={ratingSection?.rating_image_2}
          alt=""
          className="img-left-merge"
          initial="offscreen"
          whileInView="onscreen"
          variants={slideAnimationTop}
        />
      </div>

      <p className=" brand-description">
        {ratingSection?.question} <br /> <b>{ratingSection?.answer}</b>
      </p>
    </section>
  );
};

export default CustomerRating;
