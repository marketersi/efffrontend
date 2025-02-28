import React from "react";
import style from "../team.module.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Culture = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section6, section7 } = screenData;

  return (
    <>
     <div className="WidthContent1 container">
     <div className={`${style.teamContent1} additionalSpace`}>
        <p className={style.textContentBg}>
        Marketersi wybrały firmy, które osiągają sukcesy.
        </p>
      </div>
      <Container>
        <div className={style.cultureCard}>
          <img src={section7?.card7_image_1} alt="" />
          <h2>Kiedy branżowe media <br/> sięgają po nasze opinie</h2>
          <h3>wiemy, że nasze podejście działa.</h3>
        </div>
        {/* <img className={style.cultureImg} src={section7?.card7_image_2} alt="" /> */}
      </Container>
      <div className={`${style.teamContent} ${style.culturedContent}`}>
        <p className={`${style.mobilelefttext}`}>
          <span className="d-inline-block me-2">{section7?.subtitle_1}</span>
          {section7?.paragraph_1}
        </p>
        <p className={`${style.mobilelefttext}`}>
          <span className="d-inline-block me-2"> {section7?.subtitle_2}</span>
          {section7?.paragraph_2}
        </p>
        <p className={`${style.mobilelefttext}`}>{section7?.paragraph_3}</p>
      </div>
     </div>
    </>
  );
};

export default Culture;
