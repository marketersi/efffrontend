import React from 'react'
import { useSelector } from 'react-redux';

const Guarantee = () => {
  const {screenData } = useSelector((state) => state.sales);
  const {policySection} = screenData || {};
  return (
    <>
    <div className="container copywriter-custom-container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-header copywriter-custom-push-2 text-center teeTitle">
                {policySection?.title}
              </div>

              <p className="theme-desc text-center teeDescription">
               {policySection?.description}
              </p>

              <p className="theme-desc copywriter-small-text text-center teePara">
                {policySection?.bottom_description}
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Guarantee