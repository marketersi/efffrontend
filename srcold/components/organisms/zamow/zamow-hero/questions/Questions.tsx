import React from "react";
import "./questions.css";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Question12 from "./Question12";
import Question13 from "./Question13";
import Question14 from "./Question14";

const Questions = ({ handleNext, currentQuestion }) => {
  let questionComponent;

  switch (currentQuestion) {
    case 1:
      questionComponent = <Question1 handleNext={handleNext} />;
      break;
    case 2:
      questionComponent = <Question2 handleNext={handleNext} />;
      break;
    case 3:
      questionComponent = <Question3 handleNext={handleNext} />;
      break;
    case 4:
      questionComponent = <Question4 handleNext={handleNext} />;
      break;
    case 5:
      questionComponent = <Question5 handleNext={handleNext} />;
      break;
    case 6:
      questionComponent = <Question6 handleNext={handleNext} />;
      break;
    case 7:
      questionComponent = <Question7 handleNext={handleNext} />;
      break;
    case 8:
      questionComponent = <Question8 handleNext={handleNext} />;
      break;
    case 9:
      questionComponent = <Question9 handleNext={handleNext} />;
      break;
    case 10:
      questionComponent = <Question10 handleNext={handleNext} />;
      break;
    case 11:
      questionComponent = <Question11 handleNext={handleNext} />;
      break;
    case 12:
      questionComponent = <Question12 handleNext={handleNext} />;
      break;
    case 13:
      questionComponent = <Question13 handleNext={handleNext} />;
      break;
    case 14:
      questionComponent = <Question14 />;
      break;
    default:
      return;
  }

  return <>{questionComponent}</>;
};

export default Questions;
