"use client"
import React from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

const ThanksMessage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };

  return (
    <div className={style.thanks}>
      <div className={style.thanksContainer}>
        <img
          className={style.maiImg}
          src="/assets/images/Thanks/mail-animation.svg"
          alt=""
        />
        <img
          className={style.profileImg}
          src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMarta-owocni.08d79858.png&w=128&q=75"
          alt=""
        />
        <h2>Dzięki za wiadomość</h2>
        <h4>
          Hej tu Marta. O ile nie jest to weekend i jest przed godziną 16,
          odpiszę na Twoją wiadomość jeszcze dziś.
        </h4>
        <div className={style.likeButton}>
          <img src="/assets/images/Thanks/FEppCFCt76d.png" alt="" />
          <p>Obserwuj</p>
        </div>
        <h5>
          <span>Tymczasem kliknij “lubię to”.</span>
          Warto mieć fajne towarzystwo na fejsie.
        </h5>
        <p>
          11 tys. użytkowników obserwuje to. <br />
          Wyprzedź swoich znajomych i obserwuj to.
        </p>
        <button onClick={handleGoBack}>Wróć na poprzednią stronę</button>
      </div>
    </div>
  );
};

export default ThanksMessage;
