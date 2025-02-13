'use client';
import React, { useEffect } from 'react';
import NazwaHero from '@/components/organisms/nazwa/hero/Hero';
import Anatomy from '@/components/organisms/nazwa/anatomy/Anatomy';
import AnatomyGuide from '@/components/organisms/nazwa/anatomy/AnatomyGuide';
import LaunchEssentials from '@/components/organisms/nazwa/launch-essentials/LaunchEssentials';
import ProjectValue from '@/components/organisms/nazwa/project-value/ProjectValue';
import ImplementationExamples from '@/components/organisms/nazwa/Implementation-examples/ImplementationExamples';
import NazwaFooter from '@/components/organisms/nazwa/nazwa-footer/NazwaFooter';
import LogoAccordion from '@/components/organisms/logo/accordion/LogoAccordion';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_ANATOMY_SCREEN_DATA } from '@/redux/nazwa-dla-firmy/anatomyAction';
import OptionBox2 from '@/components/organisms/tresci-sprzedazowe/options-box2/OptionBox2';
import { FETCH_SALES_SCREEN_DATA } from '@/redux/tresci/salescontentAction';
import BounceLoader from 'react-spinners/BounceLoader';
import './nazwa.css';
import { ToastContainer } from 'react-toastify';

const NazwaDlaFirmy = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { launch_essentials, faq } = screenData || {};
  const { accordion } = faq || {};

  console.log('nazwaDlaFirmy acc', accordion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_ANATOMY_SCREEN_DATA });
    dispatch({ type: FETCH_SALES_SCREEN_DATA });
  }, [dispatch]);

  

  return (
    <>
      <NazwaHero />

      <Anatomy />

      <AnatomyGuide />

      <OptionBox2 optionBox2={launch_essentials} />

      <LaunchEssentials />

      <LogoAccordion items={accordion} title={faq?.title} image={faq?.image} />

      <ProjectValue />

      <ImplementationExamples />

      <NazwaFooter />
      
      <ToastContainer />
    </>
  );
};

export default NazwaDlaFirmy;
