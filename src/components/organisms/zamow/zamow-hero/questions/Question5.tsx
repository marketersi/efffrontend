import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question5 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formFive } = screenData?.surveyQuestions || {};

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formFourInputValue: inputValue,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question question_container">
      <h2>{formFive?.title}</h2>
      <p className="question_description">{formFive?.listHeading}</p>
      <div className="list_p">
        {formFive?.listItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <textarea
        rows={1}
        placeholder="Wpisz tu swoją odpowiedź"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="input_bottom_content">{formFive?.textbelowInput}</p>
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

export default Question5;
