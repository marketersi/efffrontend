import React, { useState } from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question8 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formEight } = screenData?.surveyQuestions || {};

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {
    const payload = {
      selectedOption: option,
    };

    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_marketing_container">
      <h2>{formEight?.title}</h2>
      <p>{formEight?.description_1}</p>
      <p className="range_description">{formEight?.description_2}</p>
      <div className="checkBOxContainer">
        <Row>
          {formEight?.selectOptions.map((option, index) => (
            <Col key={index} sm={6}>
              <label
                className="checkbox style-d"
                onClick={() => handleButtonClick(option)}
              >
                <input type="checkbox" />
                <div className="checkbox__checkmark"></div>
                <div className="checkbox__body">{option}</div>
              </label>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Question8;
