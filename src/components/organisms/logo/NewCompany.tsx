import React, { useEffect, useState } from 'react';
import ProfitSlider from '../tresci-sprzedazowe/profit-slider/ProfitSlider';
import { useSelector } from 'react-redux';

const NewCompany = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { NewCompanyData, NewCompanyProfitSliderData } = screenData || {};
  const { title, subtitle, cursorChangingText } = NewCompanyData || {};
  const { images } = NewCompanyProfitSliderData || {};

  const words = ['Doświadczeni', 'Kreatywni', 'Rzetelni'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < words[currentWordIndex].length) {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentLetterIndex(0);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentLetterIndex, currentWordIndex]);

  return (
    <>
      {/* <div className="halfc-bottom"></div> */}
      <section className="names-thematic-section-black names-thematic-section-black-fix">
        <div className="copywriter-ending-main-theme text-center">
          {title && title}
        </div>

        {subtitle && (
          <div className="copywriter-ending-3 text-center copywriter-ending-a copywriting-ending-text">
            {subtitle}
          </div>
        )}

        <div className="TypeMe typeme1 text-center projects-custom-typed-text">
          {words.map((word, index) => (
            <span
              key={index}
              className={`typed-cursor ${
                index === currentWordIndex ? 'active' : ''
              }`}
              style={{
                display: index === currentWordIndex ? 'inline' : 'none',
              }}
            >
              {word.substring(0, currentLetterIndex)}|
            </span>
          ))}
        </div>

        <div className="copywriter-ending-3 text-center copywriter-ending-a-italic"></div>

        <div className="clearfix"></div>

        {/* to be deleted  */}
        {/* <ProfitSlider images={images} /> */}
      </section>
    </>
  );
};

export default NewCompany;
