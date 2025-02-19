import React, { createContext, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SlideFour, SlideOne } from "./OurClients";

const CarouselContext = createContext({
  handleNext: () => {},
  handlePrev: () => {},
});

const ClientCarousel = ({ slides, options }) => {

  console.log(slides , 'slides-------------------')
  const [emblaRef, embla] = useEmblaCarousel(options);
 // const[store,dispatch] = useCallback('data')

  const handleNext = () => {
    embla && embla.scrollNext();
  };


  const handlePrev = () => {
    embla && embla.scrollPrev();
  };

  return (
    <CarouselContext.Provider value={{ handleNext, handlePrev }}>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides?.map((e, index) => (
              <div className="embla__slide" key={index}>
               
                {index === slides.length  ? (
                  <SlideFour />
                ) : (
                  <SlideOne {...e} />
                )}
              </div>
            ))}
             <div className="embla__slide">
            <SlideFour />
            </div>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export { ClientCarousel, CarouselContext };
