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
            
            <img src={Systematically.image} alt="" />

            <div className="rowD row">
              <div className="col-xxl-7 order-xxl-1 order-2">
                <h2>{Systematically.title}</h2>
                <p>
                  <b>- {Systematically.subtitle}</b>
                  <br />
                  {Systematically.description}
                </p>
              </div>
              <div className="imgs col-xxl-5 order-xxl-2 order-1">
                {/* <img src={Systematically.right_image} alt="" />
                <img src={Systematically.image} alt=""  className="mobile"/> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Systemically;
