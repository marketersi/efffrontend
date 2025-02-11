import React, { useState } from "react";
import UserInfoForm from "./nested-forms/UserInfoForm";
import SliderForm from "./nested-forms/SliderForm";
import FeedbackForm from "./nested-forms/FeedbackForm";
import "../cennikCards.css";
import { useSelector } from "react-redux";
import FormZero from "./nested-forms/FormZero";

const CardOne = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const { screenData } = useSelector((state) => state.priceList);
  const { formOne, formTwo, formThree, formFour } =
    screenData?.cardMenu?.menuOne || "";
  console.log(screenData, "Data received by CardOne");

  return (
    <>
      {currentComponent === 0 && (
        <FormZero setCurrentComponent={setCurrentComponent} form={formOne} />
      )}
      {currentComponent === 1 && (
        <SliderForm
          setCurrentComponent={setCurrentComponent}
          formTwo={formTwo}
        />
      )}
      {currentComponent === 2 && (
        <FeedbackForm
          setCurrentComponent={setCurrentComponent}
          formThree={formThree}
        />
      )}
      {currentComponent === 3 && <UserInfoForm formFour={formFour} />}
    </>
  );
};

export default CardOne;
