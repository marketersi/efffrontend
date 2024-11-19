import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";

const Support = () => {
  
  const { isLoading, screenData } = useSelector((state) => state.team);
  const {  section2 } = screenData;

  return (
    <>
      <div className={style.Support}  style={{ backgroundImage: `url(${section2?.section_two_image})` }}>
        <div className={style.teamContent}>
          <h4>
          {section2?.section_two_title}
          </h4>
          <p style={{marginTop: '100px'}}>
            <span>{section2?.section_two_subtitle}</span>
           {section2?.section_two_para}
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
