"use client";
import React from "react";
import style from "../opinie.module.css";
import SingleQuestion from "./Question";
import "./accordion.css";

const Accordion = ({ data }) => {
  return (
    <>
      <div className={style.accordion}>
        <div className={style.accordionContainer}>
          <section className="accordion-container ">
            <SingleQuestion data={data} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Accordion;
