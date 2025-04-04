'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_VIDEO_RECORDING_SCREEN_DATA } from '@/redux/profesjonalne-nagrywanie-filmow/videoRecordingAction';
import BounceLoader from 'react-spinners/BounceLoader';
import Hero from '@/components/organisms/professional-video-recording/hero/Hero';
import Video from '@/components/organisms/professional-video-recording/video/Video';
import RatingCaption from '@/components/organisms/professional-video-recording/rating-captions/RatingCaption';
import MarkSide from '@/components/organisms/professional-video-recording/mark-side-card/MarkSide';
import OurClients from '@/components/organisms/main/ourclients/OurClients';
import Entrepreneur from '@/components/organisms/professional-video-recording/entrepreneur/Entrepreneur';
import Numbers from '@/components/organisms/professional-video-recording/numbers/Numbers';
import HardResult from '@/components/organisms/professional-video-recording/hard-results/HardResults';
//import Order from '@/components/organisms/professional-video-recording/order/Order';
//import Order from '@/components/organisms/main/order/Order';
import Order from '@/components/organisms/main/order/Order';
import AfterBanner from '@/components/organisms/professional-video-recording/after-banner/Afterbanner';

const ProfessionalVideoRecording = () => {
  const { isLoading, screenData } = useSelector(
    (state) => state.videoRecording
  );
  console.log('screen data from video recording', screenData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_VIDEO_RECORDING_SCREEN_DATA });
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
           <AfterBanner />
      {/* <Video /> */}
      <RatingCaption />
      {/* <MarkSide /> */}
      <OurClients />
      <Entrepreneur />
      <Numbers />
      <HardResult />
      <Order />
    </>
  );
};

export default ProfessionalVideoRecording;
