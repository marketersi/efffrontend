import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";

const Support = () => {
  
  const { isLoading, screenData } = useSelector((state) => state.team);
  const {  section2 } = screenData;

  return (
    <>
      <section className="WidthContent">
      <div className={style.Support}>
        <div className={style.teamContent}>
          <h4>
          {section2?.section_two_title}
          </h4>
          
        </div>
        <div className={style.imagebox}>
          <img src={section2?.section_two_image} alt="" />

        </div>
      </div>
      </section>
    </>
  );
};

export default Support;
