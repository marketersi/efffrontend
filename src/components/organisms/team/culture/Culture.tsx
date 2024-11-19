import React from "react";
import style from "../team.module.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Culture = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section6, section7 } = screenData;

  return (
    <>
      <div className={style.teamContent}>
        <p>
          <span>{section6?.sub_title_6}</span>
          {section6?.sub_title_discription_6}
        </p>
      </div>
      <Container>
        <div className={style.cultureCard}>
          <img src={section7?.card7_image_1} alt="" />
          <h2>{section7?.card_title_7}</h2>
        </div>
        {/* <img className={style.cultureImg} src={section7?.card7_image_2} alt="" /> */}
      </Container>
      <div className={`${style.teamContent} ${style.culturedContent}`}>
        <p>
          <span className="d-inline-block me-2">{section7?.subtitle_1}</span>
          {section7?.paragraph_1}
        </p>
        <p>
          <span className="d-inline-block me-2"> {section7?.subtitle_2}</span>
          {section7?.paragraph_2}
        </p>
        <p>{section7?.paragraph_3}</p>
      </div>
    </>
  );
};

export default Culture;
