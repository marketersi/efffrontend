import React from "react";
import style from "../opinie.module.css";
import Stars from "@/components/molecules/Ratings";

const ReferenceCard = ({
  review,
  customer_designation,
  rating_no,
  customer_name,
}) => {
  return (
    <>
      <div className={style.referenceCard}>
        <div className={style.cardTop}>
          {/* <img
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=100"
            alt=""
          /> */}
          <Stars rating={rating_no} />
          <div>
            <h6>{customer_name},</h6>
            <p>{customer_designation}</p>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </>
  );
};

export default ReferenceCard;
