'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_VIDEO_EDITING_SCREEN_DATA } from '@/redux/Kreatywny-montaz-video/creativeVideoAction';
import BounceLoader from 'react-spinners/BounceLoader';
import Hero from '@/components/organisms/Kreatywny-montaz-video/hero/Hero';
import Video from '@/components/organisms/Kreatywny-montaz-video/video/Video';
import RatingCaption from '@/components/organisms/Kreatywny-montaz-video/rating-captions/RatingCaption';
import MarkSide from '@/components/organisms/Kreatywny-montaz-video/mark-side-card/MarkSide';
import Order from '@/components/organisms/Kreatywny-montaz-video/order/Order';
import HardResult from '@/components/organisms/Kreatywny-montaz-video/hard-results/HardResults';
import Numbers from '@/components/organisms/Kreatywny-montaz-video/numbers/Numbers';
import Entrepreneur from '@/components/organisms/Kreatywny-montaz-video/entrepreneur/Entrepreneur';
import OurClients from '@/components/organisms/main/ourclients/OurClients';

const CreativeVideoEditingScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.videoEditing);
  console.log('screen data from video editing', screenData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_VIDEO_EDITING_SCREEN_DATA });
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Video />
      <RatingCaption />
      <MarkSide />
      <OurClients />
      <Entrepreneur />
      <Numbers />
      <HardResult />
      <Order />
    </>
  );
};

export default CreativeVideoEditingScreen;
