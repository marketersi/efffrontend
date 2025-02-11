import React, { createContext } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CarouselContext = createContext({
  handleNext: () => {},
  handlePrev: () => {},
});

const ClientCarousel = ({ slides, options }) => {
  const [emblaRef, embla] = useEmblaCarousel(options);
  const handleNext = () => {
    embla.scrollNext();
  };
  const handlePrev = () => {
    embla.scrollPrev();
  };
  

  return (
    <CarouselContext.Provider value={{ handleNext, handlePrev }}>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((SlideComponent, index) => (
              <div className="embla__slide" key={index}>
                <SlideComponent />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export { ClientCarousel, CarouselContext };
