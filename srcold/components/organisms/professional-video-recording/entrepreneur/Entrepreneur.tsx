import React from 'react';
import ReactPlayer from 'react-player';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import style from '../main.module.css';
import useOsClass from '@/components/molecules/useOsClass';

const Entrepreneur = () => {
  const { screenData } = useSelector((state) => state.videoRecording);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section1 } = imageswithdescription || {};
  const osClass = useOsClass();
  return (
    <div>
      <Container>
        <div className={style.enter}>
          <div className={osClass}>
          <ReactPlayer
            url={section1?.image_url}
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="auto"
            className={style.socialVideo}
            pip={false}
            playsinline
          />
          </div>
          <div className={style.Content}>
            <h2>{section1?.title}</h2>
            <p>{section1?.subtitle_1}</p>
            <p>{section1?.paragraph_1}</p>

            <p>{section1?.paragraph_2}</p>
            <p>{section1?.paragraph_3}</p>
            <h4>{section1?.subtitle_2}</h4>
            <p>{section1?.paragraph_4}</p>
            <p>{section1?.paragraph_5}</p>
            <p>{section1?.paragraph_6}</p>
            <p>{section1?.paragraph_7}</p>
            <p>{section1?.paragraph_8}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Entrepreneur;
