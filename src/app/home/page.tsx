'use client';
import Hero from '@/components/organisms/main/Hero/Hero';
import Entrepreneur from '@/components/organisms/main/entrepreneur/Entrepreneur';
import MarkSide from '@/components/organisms/main/mark-side-card/MarkSide';
import RatingCaption from '@/components/organisms/main/rating-captions/RatingCaption';
import Numbers from '@/components/organisms/main/numbers/Numbers';
import HardResult from '@/components/organisms/main/hard-results/HardResults';
import React, { useEffect } from 'react';
import Order from '@/components/organisms/main/order/Order';
import Video from '@/components/organisms/main/video/Video';
import OurClients from '@/components/organisms/main/ourclients/OurClients';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_HOME_SCREEN_DATA } from '@/redux/home/homeAction';
import BounceLoader from 'react-spinners/BounceLoader';
import './home.css';

interface HomeState {
  isLoading: boolean;
  screenData: any;
}

export interface RootState {
  home: HomeState;
}
const HomeScreen = () => {
  const { isLoading, screenData } = useSelector(
    (state: RootState) => state.home
  );
  const dispatch = useDispatch();

  if (screenData) {
    console.log('home screen data from UI => ', screenData);
  }

  useEffect(() => {
    console.log("hellll@@@@@@@@@@")
  }, []);

  useEffect(() => {
    dispatch({ type: FETCH_HOME_SCREEN_DATA });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <BounceLoader color="#00bfff" size={50} />
        </div>
      ) : (
        <div>
          <div className='overflow-fulldiv'>
            <Hero />
          <Video />
          <RatingCaption />
          </div>
      
          <MarkSide />
          <OurClients />
          <Entrepreneur />
          <Numbers />
          <HardResult />
          <Order />
        </div>
      )}
    </>
  );
};

export default HomeScreen;
