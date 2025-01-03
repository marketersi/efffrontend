import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import useOsClass from "@/components/molecules/useOsClass";
import ProjectuxModal from "../modals/ProjectuxModal";


const UxBanner = () => {
  const uxScreenData = useSelector((state) => state.ux.screenData);

  const HeroSection = uxScreenData?.HeroSection || {};
  // Using priceListData here

  const osClass = useOsClass();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
          <div className="row m-0">
            <div className="col-md-7">
              {/* <h1 className="titleHead">
                <span>
                  {HeroSection?.title1}
                  
                </span>
                <br />
                {HeroSection?.title2}
              </h1>  */}
              <h1 className="titleHead">
                <span>Tworzenie stron </span>
                <span> i design UX</span>
                <span> z Marketersi.</span>
              </h1>
              {/* <p className="subitle">{HeroSection.description1}</p> */}
              <p className="subitle">
                Tworzymy strony i design UX, które <br />{" "}
                <span>przekładają się na sukces.</span>
              </p>
              <p className="subitle">{HeroSection.description2} </p>

              <button className="buttonux" onClick={openModal}>
                Brzmi świetnie. Wyślijcie mi ofertę.
              </button>
            </div>
            <div className={`col-md-5 ${osClass}`}>
              <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                url={HeroSection?.video_url}
                className="UXheroVideo"
                playsinline
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

export default UxBanner;
