import React from "react";
import { useSelector } from "react-redux";


const Opinion = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { OpinionData } = screenData || {};
  const { image, imageText } = OpinionData || {};

  return (
    <>
      <section className="projects-gray-opinion-1">
        <div className="container projects-opinion-box-container one-box-opinion-cont">
          <div className="row">
            <div className="col-md-12">
              <div className="opinion-box">
                <div className="opinion-box-image opinion-box-image-right right-image-opinion-fix custom-text-align-right">
                  
                  {image && (
                    <img
                      src={image}
                      className="opinion-box-inside-image"
                      alt="Grafik logo przy pracy"
                      title="Grafik logo Jakub z Owocnych"
                    />
                  )}
                </div>
             
                <div className="opinion-box-content opinion-box-content-fix opinion-box-content-left projects-opinion-1">
                  <div className="opinion-box-text projects-custom-opinion projects-black-text-opinion mobilenormalfont">
                    
                    {imageText && imageText} 
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Opinion;
