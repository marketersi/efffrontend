import useOsClass from "@/components/molecules/useOsClass";
import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const GoodProcess = () => {
  const { screenData } = useSelector((state) => state.ux);
  const GoodProcess = screenData.GoodProcess || {};
  const { stage_1, stage_2, stage_3 } = screenData.GoodProcess?.Stages || {};
  const osClass = useOsClass();
  return (
    <>
    
      <section className="goodProcess">
      <div className="one">
          <div className="number"><img src="https://images.prismic.io/marketersi/Z30cjpbqstJ99Hnx_NUMBER1--versionwithoutbackground-.png?auto=format,compress" alt="" /></div>
        </div>
        <div className="process1">
          <div className={`one ${osClass}`}>
            <ReactPlayer
              url={stage_1?.video_url}
              playing={true}
              loop={true}
              muted={true}
              className="processVideo"
              playsinline
            />

            <h3>{stage_1?.title}</h3>
            <p className="subtitle">{stage_1?.subtitle}</p>
            <p>{stage_1?.description}</p>
          </div>
        </div>
        
        <div className="two">
          <div className="number"><img src="https://images.prismic.io/marketersi/Z30cjZbqstJ99Hnv_NUMBER2--versionwithoutbackground-.png?auto=format,compress" alt="" /></div>
        </div>
        <div className="process2">
        <div className={`two ${osClass}`}>
          <ReactPlayer
            url={stage_2?.video_url}
            playing={true}
            loop={true}
            muted={true}
            className="processVideo"
            playsinline
          />

          <h3>Rozwój i Korzyści</h3>
          <p className="subtitle">{stage_2?.subtitle}</p>
          <p>{stage_2?.description}</p>
        </div>
        </div>
        <div className="three">
          <div className="number"><img src="https://images.prismic.io/marketersi/Z30cj5bqstJ99Hny_NUMBER3-versionwithoutbackground-.png?auto=format,compress" alt="" /></div>
        </div>
        <div className="process3">
        <div className="three order6">
          {/* <ReactPlayer
            url={stage_3?.video_url}
            playing={true}
            loop={true}
            muted={true}
            className="processVideo"
            playsinline
          /> */}
          <img src={stage_3?.video_url} alt="" />

          <h3>{stage_3?.title}</h3>
          <p className="subtitle">{stage_3?.subtitle}</p>
          <p>{stage_3?.description}</p>
        </div>
        </div>
        <h1 className="afterImage">Przykłady
Realizacji
</h1>
      
      </section>
      
    </>
  );
};

export default GoodProcess;
