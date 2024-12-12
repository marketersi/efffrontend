import React from "react";
import { useSelector } from "react-redux";

const FormContact = () => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formFour } = screenData?.cardMenu?.menuThree || "";
  return (
    <>
      <div className="contact">
        <div className="top-part">
        <h5>{formFour?.contact?.form4_contact_title}</h5>
        <p>{formFour?.contact?.form4_contact_info}</p>
        </div>

        <img src={formFour?.contact?.form4_contact_image} alt="" />
        <div className="whiteBox"></div>
        <div className="bottom-part">
        <h5>{formFour?.contact?.form4_contact_contactText}</h5>
        <a href="tel:+48660970980">{formFour?.contact?.form4_contact_tel}</a>
        </div>
      </div>
    </>
  );
};

export default FormContact;
