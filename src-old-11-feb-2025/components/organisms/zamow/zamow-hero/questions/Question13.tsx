import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { POST_EXAMINATION_SURVEY } from "@/redux/zamow/zamowAction";

const Question13 = ({ handleNext }) => {
  const { isLoading, screenData, formData } = useSelector(
    (state) => state.examination
  );
  const { formThirteen } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formZeroInputValue: formData?.formZeroInputValue,
      formOneInputValue: formData?.formOneInputValue,
      formTwoInputValue: formData?.formTwoInputValue,
      formThreeInputValue: formData?.formThreeInputValue,
      formFourInputValue: formData?.formFourInputValue,
      selectedRangeValue: formData?.selectedRangeValue,
      selectedOptionValue: formData?.selectedOption,
      selectedRangeValueTwo: formData?.selectedRangeValueTwo,
      formFiveInputValue: formData?.formFiveInputValue,
      selectedOptionValueTwo: formData?.selectedOptionTwo,
      formSixInputValue: formData?.formSixInputValue,
      formSevenInputValue: inputValue,
    };

    dispatch({ type: POST_EXAMINATION_SURVEY, payload });
    handleNext();
  };

  return (
    <div className="zh_question working_container">
      <h2>{formThirteen?.title} </h2>
      <p>{formThirteen?.description_1}</p>
      <p>{formThirteen?.description_2}</p>
      <textarea
        rows={1}
        placeholder="Wpisz tu swoją odpowiedź"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="input_description">
        Shift + Enter aby przejść do następnej linii
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
          style={{ cursor: !inputValue ? "not-allowed" : "pointer" }}
          disabled={!inputValue}
        >
          OK
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question13;
