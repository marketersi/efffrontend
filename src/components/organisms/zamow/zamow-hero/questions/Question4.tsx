import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question4 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formFour } = screenData?.surveyQuestions || {};
  return (
    <div className="zh_question question_container">
      <h2>
        {formFour?.title}
      </h2>

      <p>
       {formFour?.descriptionOne}
      </p>
      <p>
        {formFour?.descriptionTwo}
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
         {formFour?.buttonText}
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question4;
