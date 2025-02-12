import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const ProfitSlider = ({ images }) => {
  return (
    <>
      <section className="profit-sec">
        <Carousel>
          {images?.map((image) => (
            <Carousel.Item>
              <ExampleCarouselImage src={image} alt="Second slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default ProfitSlider;
