"use client";
import React, { useState } from "react";
import { accordionData } from "./data";
import SingleQuestion from "./SingleQuestion";
import "./accordion.css";
import { useSelector } from "react-redux";

const Accordion = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { FAQ_Section } = screenData || {};
  const { FAQ } = FAQ_Section || [];

  const [questions, setQuestions] = useState(accordionData);
  const [openQuestionId, setOpenQuestionId] = useState(0);

  const handleQuestionClick = (questionId) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  return (
    <div className="zamow_accordion">
      <h3 className="accordion-heading">{FAQ_Section?.title}</h3>
      <section className="accordion-container w-lg-75 w-100">
        {FAQ?.map((question, index) => {
          return (
            <SingleQuestion
              key={index}
              {...question}
              isOpen={index === openQuestionId}
              onQuestionClick={() => handleQuestionClick(index)}
            ></SingleQuestion>
          );
        })}
      </section>
    </div>
  );
};

export default Accordion;
