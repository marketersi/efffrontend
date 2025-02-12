'use client';
import React, { useEffect } from 'react';
import Banner from '@/components/organisms/opinie/banner/Banner';
import Review from '@/components/organisms/opinie/review/Review';
import Teams from '@/components/organisms/opinie/teams/Teams';
import Brands from '@/components/organisms/opinie/brands/Brands';
import Rating from '@/components/organisms/opinie/rating/Rating';
import Accordion from '@/components/organisms/opinie/accordion/Accordion';
import GoogleReview from '@/components/organisms/opinie/google-review/GoogleReview';
import References from '@/components/organisms/opinie/references/References';
import Personally from '@/components/organisms/opinie/personally/Personally';
import Experts from '@/components/organisms/opinie/expert/Experts';
import Order from '@/components/organisms/main/order/Order';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_OPINION_SCREEN_DATA } from '@/redux/opinie/opinionAction';
import { FETCH_HOME_SCREEN_DATA } from '@/redux/home/homeAction';
import './opinion.css';
import ReviewCard from '@/components/organisms/opinie/brilliant-job/ReviewCard';
import HappyCustomers from '@/components/organisms/opinie/happy-customers/HappyCustomers';
import BounceLoader from 'react-spinners/BounceLoader';

const CustomersOpinion = () => {
  const { isLoading, screenData } = useSelector((state) => state.opinion);
  const AccordionOne = screenData.Acoordion1 || {};
  const AccordionTwo = screenData.Acoordion2 || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_OPINION_SCREEN_DATA });
    dispatch({ type: FETCH_HOME_SCREEN_DATA });
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <Banner />
      <HappyCustomers />
      <ReviewCard />
      <div className="review">
        <Review />
        
      </div>
      <Teams />
      <Brands />
      <Rating />
      {/* to be deleted */}
      {/* <Accordion data={AccordionOne} />
      <GoogleReview />
      <Accordion data={AccordionTwo} /> */}
      <References />
      <Personally />
      <Experts />
      <Order />
    </>
  );
};

export default CustomersOpinion;
