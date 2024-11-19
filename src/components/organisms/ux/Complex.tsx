import React from "react";
import { useSelector } from "react-redux";


const Complex = () => {
  const { screenData } = useSelector((state) => state.ux);
  const complex = screenData.complex || {};

  return (
    <>
      <section className="arrowContainer">
        <div id="textArrow">
          <h2>
            {complex.title}
          </h2>
          <div className="rowD">
            <div>
              <p>
                {
                  complex.paragraph_1
                }
              </p>
            </div>
            <img
              src="https://propozycje.owocni.pl/ux/Strzalka-Grafik-Marketer.f87779c7.jpg"
              alt=""
            />
            <div>
              <p>
                {complex.paragraph_2}
              </p>
            </div>
          </div>
          <div className="one">
            <p>
              {complex.paragraph_3}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complex;
