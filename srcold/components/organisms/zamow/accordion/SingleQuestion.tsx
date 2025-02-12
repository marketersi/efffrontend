import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SingleQuestion = ({ question, answer, isOpen, onQuestionClick }) => {

  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { formThree } = screenData?.surveyQuestions || {};


  return (
    <article className={`question ${isOpen ? "showBorder" : ""}`}>
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={onQuestionClick}>
          {isOpen ? (
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          )}
        </button>
      </header>
      {isOpen && <p className="info">{answer}</p>}
    </article>
  );
};

export default SingleQuestion;
