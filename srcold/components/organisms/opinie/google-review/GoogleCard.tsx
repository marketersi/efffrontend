import React from "react";
import style from "../opinie.module.css";

const GoogleCard = () => {
  return (
    <div>
      <div className={style.googleCard}>
        <div className={style.profile}>
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJuNq-ok72P-YD59pOxPuaLcbZKGf4_3PSX9zwVm4lmd7k=s40-c-rp-mo-br100"
            alt=""
          />
          <div className={style.profileContent}>
            <h6>Adrian Krauza</h6>
            <p>5 Opinii</p>
            <img
              src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=100"
              alt=""
            />
          </div>
        </div>
        <div className={style.comment}>
          <p>
            Z całym sercem polecam Owocnych w kwestii projektowania logo i
            stron. Pan Bartek odzwierciedlił dokładnie to, co miałem na myśli.
            Efekt
          </p>
          <button>+ Rozwiń</button>
        </div>
      </div>
    </div>
  );
};

export default GoogleCard;
