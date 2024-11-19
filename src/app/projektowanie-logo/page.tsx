'use client';
import React, { useEffect, useState } from 'react';
import './logoDesign.css';
import LogoBanner from '@/components/organisms/logo/LogoBanner';
import SampleLogo from '@/components/organisms/logo/SampleLogo';
import GoodBusiness from '@/components/organisms/logo/GoodBusiness';
import PDFCopy from '@/components/organisms/logo/PDFCopy';
import Opinion from '@/components/organisms/logo/Opinion';
import Receive from '@/components/organisms/logo/Receive';
import Guarantee from '@/components/organisms/logo/Guarantee';
import LogoAccordion from '@/components/organisms/logo/accordion/LogoAccordion';
import items from '@/components/organisms/logo/accordion/LogoData';
import ProjectValue from '@/components/organisms/logo/ProjectsValue';
import Gallery from '@/components/organisms/logo/Gallery';
import StepByStep from '@/components/organisms/logo/StepByStep';
import FreeShops from '@/components/organisms/logo/FreeShops';
import Enexo from '@/components/organisms/logo/Enexo';
import Daco from '@/components/organisms/logo/Daco';
import Aico from '@/components/organisms/logo/Aico';
import ZooGarden from '@/components/organisms/logo/ZooGarden';
import Construction from '@/components/organisms/logo/Construction';
import Restaurant from '@/components/organisms/logo/Restaurant';
import Park from '@/components/organisms/logo/Park';
import GPN from '@/components/organisms/logo/GPN';
import NewCompany from '@/components/organisms/logo/NewCompany';
import Form from '@/components/organisms/tresci-sprzedazowe/form/Form';
import LogoFooter from '@/components/organisms/logo/logo-footer/LogoFooter';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_LOGO_SCREEN_DATA } from '@/redux/projektowanie-logo/logoAction';
import { FETCH_SALES_SCREEN_DATA } from '@/redux/tresci/salescontentAction';
import { ModalForm } from '@/components/organisms/tresci-sprzedazowe/ModalForm';
import BounceLoader from 'react-spinners/BounceLoader';

const LogoDesignScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const dispatch = useDispatch();

  const { LogoAccordionData } = screenData || {};
  const { accordionData, title, description } = LogoAccordionData || {};

  useEffect(() => {
    dispatch({ type: FETCH_LOGO_SCREEN_DATA });
    dispatch({ type: FETCH_SALES_SCREEN_DATA });
  }, [dispatch]);

  useEffect(() => {
    console.warn('accordionData👉✅', accordionData);
  }, [accordionData]);

  const [isModal, setIsModal] = useState(false);

  const handleModalClose = () => {
    setIsModal(!isModal);
  };

  const openModal = () => {
    setIsModal(true);
  };

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <LogoBanner openModal={openModal} />
      {/* <SampleLogo /> */}
      <GoodBusiness />
      <PDFCopy />
      <Opinion />
      <Receive />
      <Guarantee openModal={openModal} />
      <LogoAccordion items={accordionData} title={title} image={description} />
      <ProjectValue />
      <Gallery openModal={openModal} />
      <StepByStep />
      <FreeShops />
      <Enexo />
      <Daco />
      <Aico />
      <ZooGarden />
      <Construction />
      <Restaurant />
      <Park />
      <GPN />
      <NewCompany />
      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center">
          Zróbmy razem <br />
          coś fajnego
        </div>
        <Form />
      </section>
      <LogoFooter openModal={openModal} />

      <ModalForm isOpen={isModal} onClose={handleModalClose} />
    </>
  );
};

export default LogoDesignScreen;
