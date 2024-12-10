"use client"
import React from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

const ThanksMessage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };
  const handleGoToOpinie = () => {
    router.push("/marketersi-opinie"); // Navigate to the desired page
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
        <h2>Dziękujemy za Twoje zgłoszenie.</h2>
        <h4>
        Właśnie zaczynamy działać, by przygotować dla Ciebie coś wyjątkowego. Skontaktujemy się z Tobą w ciągu 24 godzin w dni robocze (poniedziałek - piątek)
        </h4>
        {/* <div className={style.likeButton}>
          <img src="/assets/images/Thanks/FEppCFCt76d.png" alt="" />
          <p>Obserwuj</p>
        </div> */}
        <h5>
          <span>W międzyczasie…</span>
          Zobacz, jak pomogliśmy innym.
        </h5>
        <h5>"I jakie efekty osiągnęli dzięki współpracy z nami</h5>
        
        <button onClick={handleGoToOpinie}>Poznaj opinie klientów</button>
      </div>
    </div>
  );
};

export default ThanksMessage;
