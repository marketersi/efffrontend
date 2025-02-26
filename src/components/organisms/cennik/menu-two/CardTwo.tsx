import React, { useState } from "react";
import FormOne from "./nested-forms/FormOne";
import FormTwo from "./nested-forms/FormTwo";
import FormThree from "./nested-forms/FormThree";
import "../cennikCards.css";
import FormZero from "./nested-forms/FormZero";
import { useSelector } from "react-redux";

const CardTwo = ({ form }) => {
  const { Section1, Section2, Section3, Section4 } = form || {};

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { Form1 } = screenData?.cardMenu?.MenuTwo || {};
  console.log(Form1 , 'Form1Form1')
  console.log(Section2 , 'Section2Section2')

  const [currentComponent, setCurrentComponent] = useState(0);

  return (
    <>
      {currentComponent === 0 && (
        <FormZero setCurrentComponent={setCurrentComponent} form={Section1} />
      )}

      {currentComponent === 1 && (
        <FormOne setCurrentComponent={setCurrentComponent} form={Section2} />
      )}
      {currentComponent === 2 && (
        <FormTwo setCurrentComponent={setCurrentComponent} form={Section3} />
      )}
      {currentComponent === 3 && <FormThree form={Section4} />}
    </>
  );
};

export default CardTwo;
