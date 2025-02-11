import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question7 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formSeven } = screenData?.surveyQuestions || {};

  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value, 10));
  };

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      selectedRangeValue: rangeValue,
    };
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_question range_container">
      <h2>{formSeven?.title}</h2>
      <p className="goal_description">{formSeven?.subtitle}</p>
      <p className="range_description">{formSeven?.info}</p>

      <div className="income_show">{rangeValue} zł</div>
      {rangeValue === 0 && (
        <img
          className="tri_arrow"
          src="https://badanie.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.2faecaee.png&w=256&q=75"
          alt=""
        />
      )}
      <input
        min={0}
        max={100000}
        type="range"
        step={1000}
        value={rangeValue}
        onChange={handleRangeChange}
        className="income_range"
      />

      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleButtonClick}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          {formSeven?.buttonText}
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question7;
