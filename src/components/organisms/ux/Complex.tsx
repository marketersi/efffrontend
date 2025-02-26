import React from "react";
import { useSelector } from "react-redux";


const Complex = () => {
  const { screenData } = useSelector((state) => state.ux);
  const complex = screenData.complex || {};

  return (
    <>
      <section className="arrowContainer mobilelefttext">
        <div id="textArrow">
          <h2>
            {complex.title}
          </h2>
          <div className="rowD">
            
            
              <p>
                {complex.paragraph_2}
              </p>
              <p>
                {
                  complex.paragraph_1
                }
              </p>
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
