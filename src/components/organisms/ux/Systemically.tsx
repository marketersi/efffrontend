import React from "react";
import { useSelector } from "react-redux";

const Systemically = () => {
  const { screenData } = useSelector((state) => state.ux);
  const Systematically = screenData.Systematically || {};

  return (
    <>
      <section>
        <div id="guaranteeWrapper">
          <div id="guarantee">
            
            

            <div className="rowD">
              <div className="colm">
                <h2>{Systematically.title}</h2>
                <p>
                  <b> {Systematically.subtitle}</b>
                  
                  {Systematically.description}
                </p>
              </div>
              
            </div>
            <img src={Systematically.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Systemically;
