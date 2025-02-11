import React from "react";
import "./logo.css";
import { useSelector } from "react-redux";

const SampleLogo = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { SampleLogoData } = screenData || {};
  const { imageGroup1, imageGroup2, imageGroup3, imageGroup4} = SampleLogoData || {};

  return (
    <>
      <section className="sampleLogo">
        <div className="container-fluid projects-top-logo-container text-center desktopLogo">
          {imageGroup1 &&
            imageGroup1.map((image, index) => (
              <img
                key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center desktopLogo">
          {imageGroup2 &&
            imageGroup2.map((image, index) => (
              <img
              key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>

        <div className="container-fluid projects-top-logo-container text-center projects-bottom-push desktopLogo">
          
          {imageGroup3 &&
            imageGroup3.map((image, index) => (
              <img
              key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>
        <div className="container-fluid projects-top-logo-container text-center projects-bottom-push mobileLogo">
          
          {imageGroup4 &&
            imageGroup4.map((image, index) => (
              <img
              key={index}
                src={image}
                className="projects-top-logo"
                alt="Elegancki branding firmy eKonto"
                title="Projekt loga dla Konto"
              />
            ))}
        </div>
       

      </section>
    </>
  );
};

export default SampleLogo;
