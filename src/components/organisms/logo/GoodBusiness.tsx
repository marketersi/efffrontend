import React from "react";
import { useSelector } from "react-redux";

const GoodBusinessData = {
  title: "Dobry biznes zaczyna od dobrego logo",
  subtitle: "Dobry logo pomaga rozwijać firmę znacznie szybciej.",
  text: "Właściwy projekt przyciąga porządanych klientów i łatwo zapada im w pamięć. Wyróżnia Cię na tle konkurencji czyni Twoją markę niemożliwą do zignorowania.",
  image:
    "/assets/images/logo-design/Projektowanie-logo-dla-firm-anatomia.jpg.webp",
};

const GoodBusiness = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GoodBusinessData } = screenData || {};
  const { title, subtitle, text, image } = GoodBusinessData || {};

  return (
    <>
      <section>
        <div className="container projects-custom-container1 mt-5">
          <div className="row">
            <div className="col-md-12">
              
              <h1 className="theme-title1 projects-big-header">
                {title && title}
              </h1>
              <p className="theme-desc text-center p-0 projects-under-big-header">
                <strong>{subtitle && subtitle}</strong> <br />
                {text && text}
              </p>
            </div>
          </div>
        </div>
        {image && (
          <img
            src={image}
            className="img-background-logop"
            alt="Obrazek przedstawiający anatomię projektowania logo"
            title="Projektowanie logo firmy - przekrź działań"
          />
        )}
      </section>
    </>
  );
};

export default GoodBusiness;
