import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const Question11 = ({ handleNext }) => {
  const { screenData } = useSelector((state) => state.examination);
  const { formEleven } = screenData?.surveyQuestions || {};

  const dispatch = useDispatch();

  const handleButtonClick = (option) => {
    const payload = {
      selectedOptionTwo: option,
    };

    console.log("payload selected option 2 exam ui", payload);
    dispatch(saveExaminationFormData(payload));
    handleNext();
  };

  return (
    <div className="zh_marketing_container">
      <h2>{formEleven?.title}</h2>
      <div className="checkBOxContainer">
        <Row>
          {formEleven?.options.map((option, index) => (
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

export default Question11;
