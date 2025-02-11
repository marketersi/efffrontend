import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Question6 = ({ handleNext }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formSix } = screenData?.surveyQuestions || {};
  
  return (
    <div className="zh_question Thanks">
      <h2>{formSix?.title}</h2>
      <p>
       {formSix?.description}
      </p>
      <div className="zh_next_btn_container">
        <motion.button
          onClick={handleNext}
          className="zh_next_btn"
          whileHover={{ translateY: 5 }}
        >
          {formSix?.buttonText}
        </motion.button>
        <p>Wciśnij Enter</p>
      </div>
    </div>
  );
};

export default Question6;
