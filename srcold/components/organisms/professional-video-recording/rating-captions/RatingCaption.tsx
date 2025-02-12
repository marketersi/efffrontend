import React from 'react';
import style from './rating.module.css';
import { Container, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const RatingCaption = () => {
  const { screenData } = useSelector((state) => state.videoRecording);
  const { brandSection, companySection } = screenData;

  return (
    <div className={style.rating}>
      <Container>
        <div className={style.ratingImg}>
          <Image
            src={brandSection?.brand_image1}
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            src={brandSection?.brand_image2}
            alt="rating image"
            width={300}
            height="auto"
          />
        </div>

        <div className={style.ratingMainImg}>
          <Image
            src={brandSection?.banner_image}
            alt="rating image"
            width={500}
            height={300}
          />
          <p>
            <span>{brandSection?.banner_text}</span>
          </p>
        </div>
        <div className={style.ratingLogoImg}>
          <Image
            src={brandSection?.brand_logo1}
            alt="rating image"
            width="auto"
            height="auto"
          />
          <Image
            src={brandSection?.brand_logo2}
            alt="rating image"
            width="auto"
            height="auto"
          />
        </div>
        <div className={style.ratingCOntent}>
          <h2>{companySection?.main_title}</h2>
          <p>{companySection?.subtitle1}</p>
          <p>{companySection?.subtitle2}</p>
        </div>
      </Container>
    </div>
  );
};

export default RatingCaption;
