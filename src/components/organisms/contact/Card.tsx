import React from "react";
import { Image } from "react-bootstrap";
import Link from 'next/link'

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
  <h6 style={{ fontWeight: 'normal', fontSize: '16px', color: '#444', lineHeight: '1.5' }}>
    🇬🇧 Mówię również po angielsku <br />
    feel free to call or mail in English!
  </h6>
</div>

      <img  className="CountryFlag" src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEnglish.d32cd609.png&w=256&q=100" alt="" />

      <Link href ="/marketersi-opinie"
        id={id === 1 ? "card_btn_active" : ""}
        className="card_btn"
      >
        <span>Zadzwoń</span> <br /> {phone}
      </Link>
    </div>
  );
};

export default ContactCard;
