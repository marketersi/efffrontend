import React from "react";
import { Image } from "react-bootstrap";

const ContactCard = ({ title, name, phone, email, image, id }) => {
  return (
    <div className="card">
      <div className="tital">{title}</div>
      <div className="name_Image">
        <div className="Image">
          <Image src={image} alt="" className="project_dp" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="mail_id">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="mail_id">
       <h6>Mówię również po angielsku <br/>
      feel free to call or mail in English! 
</h6>
      </div>
      <a
        href={`tel:${phone}`}
        id={id === 1 ? "card_btn_active" : ""}
        className="card_btn"
      >
        <span>Zadzwoń</span> <br /> {phone}
      </a>
    </div>
  );
};

export default ContactCard;
