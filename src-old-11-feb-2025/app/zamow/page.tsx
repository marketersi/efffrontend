'use client';
import React, { useEffect } from 'react';
import ZamowHero from '@/components/organisms/zamow/zamow-hero/ZamowHero';
import CustomerRating from '@/components/organisms/zamow/customer-rating/CustomerRating';
import Accordion from '@/components/organisms/zamow/accordion/Accordion';
import { Container } from 'react-bootstrap';
import Results from '@/components/organisms/zamow/results/Results';
import './zamow.css';
import { motion } from 'framer-motion';
import { FETCH_EXAMINATION_SCREEN_DATA } from '@/redux/zamow/zamowAction';
import { useDispatch, useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';

const BookExamination = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);

  const dispatch = useDispatch();

  if (screenData) {
    console.log('Examination screen data from UI => ', screenData);
  }

  useEffect(() => {
    dispatch({ type: FETCH_EXAMINATION_SCREEN_DATA });
  }, [dispatch]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <div>
        <div className="bg_sunset"></div>
        <Container className="zamow-container">
          <ZamowHero />
          <CustomerRating />
          <Results />
          <Accordion />
          <div className="btt_btn_container">
            <motion.button
              onClick={handleBackToTop}
              className="btt_btn"
              whileHover={{ translateY: 5 }}
            >
              Powrót na górę
            </motion.button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BookExamination;
