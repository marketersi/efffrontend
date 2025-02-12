import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./zamow-hero.css";
import { motion } from "framer-motion";
import Questions from "./questions/Questions";
import { useDispatch, useSelector } from "react-redux";
import { saveExaminationFormData } from "@/redux/zamow/zamowSlice";

const ZamowHero = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { heroSection, ratingSection } = screenData || {};

  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const totalQuestions = 14;
  const handleNextQuestion = () => {
    setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  return (
    <section>
      <Row>
        <Col className="text-center zamow-hero">
          {progress ? (
            <>
              <Questions
                handleNext={handleNextQuestion}
                currentQuestion={currentQuestion}
              />
              {progress && (
                <div className="progress-bar-container">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>{" "}
                  <button
                    className="back-button"
                    onClick={handlePreviousQuestion}
                  >
                    COFNIJ
                  </button>
                </div>
              )}
            </>
          ) : (
            <FormZero
              heroSection={heroSection}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </Col>
      </Row>
      <div className="line-container">
        <p className="mb-0 small">{ratingSection?.label} :</p>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default ZamowHero;

const FormZero = ({ heroSection, handleNextQuestion }) => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const payload = {
      formZeroInputValue: inputValue,
    };

    console.log("payload 0 exam ui", payload);
    dispatch(saveExaminationFormData(payload));
    handleNextQuestion();
  };

  return (
    <>
      <h1>{heroSection?.title}</h1>
      <p>{heroSection?.info}</p>
      <p style={{ fontSize: "16px" }}>{heroSection?.sub_info}</p>
      <div className="input-container">
        <input
          placeholder="Wpisz tu adres strony www."
          className="zemow-hero-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <motion.button
          className="zamow-hero-btn"
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleButtonClick}
        >
          Rozpocznij.
        </motion.button>
      </div>
    </>
  );
};
