import React, { useState } from "react";
import FeedbackSection from "./nested-forms/FormTwo";
import SliderSection from "./nested-forms/FormOne";
import UserDetailsSection from "./nested-forms/FormThree";
import FormZero from "./nested-forms/FormZero";

const CardThree = () => {
  const [currentComponent, setCurrentComponent] = useState(0);

  return (
    <>
      {currentComponent === 0 && (
        <FormZero setCurrentComponent={setCurrentComponent} />
      )}

      {currentComponent === 1 && (
        <SliderSection setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 2 && (
        <FeedbackSection setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === 3 && <UserDetailsSection />}
    </>
  );
};

export default CardThree;
