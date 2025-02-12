import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const SingleQuestion = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={`question ${showInfo ? "showBorder" : ""}`}>
      <header>
        <h4>{data?.question}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <FontAwesomeIcon icon={faMinusCircle} className="icon" />
          ) : (
            <FontAwesomeIcon icon={faPlusCircle} className="icon" />
          )}
        </button>
      </header>
      {showInfo && (
        <>
          <p className="info">{data?.paragraph_1}</p>
          <p className="info">{data?.paragraph_2}</p>
        </>
      )}
    </article>
  );
};

export default SingleQuestion;
