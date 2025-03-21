import React from "react";
import "./factsContainer.css";

const FactsCard = ({ id, title, image_url, description }) => {
  return (
    <div className="fact_container">
      <div>
        <div className="facts_img_card">
          <img src={image_url} alt="" />
        </div>
        <div className="facts_title_card">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="PDecoration">
        {description?.map((e, i) => {
          return (
            <p  key={i} className={i === 0 ? "PDecorationFirst":""} style={{ fontWeight: i === 0 ? "500" : "" }}>
              {e}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FactsCard;
