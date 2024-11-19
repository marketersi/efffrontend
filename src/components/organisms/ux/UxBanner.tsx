import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import useOsClass from '@/components/molecules/useOsClass';

const UxBanner = () => {
  const { screenData } = useSelector((state) => state.ux);
  const HeroSection = screenData.HeroSection || {};
  const osClass = useOsClass();
  return (
    <>
      <section>
        <div id="header" className="UXBannerContainer">
          <div className="row m-0">
            <div className="col-xxl-12 order-2">
              <h1 className="titleHead">
                <span>
                  {HeroSection?.title1}
                  {/* <span className="UX"> {HeroSection?.styled_title}</span> */}
                </span>
                <br />
                {HeroSection?.title2}
              </h1>
              <p className="subitle">{HeroSection.description1}</p>
              <p className="subitle mt-4">{HeroSection.description2} </p>
              <p className="subitle"></p>
              {/* <span className="underLine underLine2">
                <span>u</span>
                <span>p</span>
                <span>o</span>
                <span>r</span>
                <span>z</span>
                <span>ą</span>
                <span>d</span>
                <span>k</span>
                <span>o</span>
                <span>w</span>
                <span>a</span>
                <span>ć</span>
                <span className="space"></span>
                <span>o</span>
                <span>f</span>
                <span>e</span>
                <span>r</span>
                <span>t</span>
                <span>ę</span>
              </span> */}
            </div>
            <div className={`col-xxl-12  order-1 ${osClass}`}>
              <ReactPlayer
                muted={true}
                playing={true}
                loop={true}
                width="50%"
                height="auto"
                url={HeroSection?.video_url}
                className="UXheroVideo"
                playsinline
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UxBanner;
