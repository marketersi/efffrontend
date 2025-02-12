import Stars from "@/components/molecules/Ratings";
import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "./reviewCard.css";
import useOsClass from "@/components/molecules/useOsClass";

const ReviewCard = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const BrilliantJob = screenData.BrilliantJob || [];
  const osClass = useOsClass();
  return (
    <div className="review">  
    <div className="review_container">
      <div className="reviewer_image_container">
        <img src={BrilliantJob[0]?.image_url} alt="reviewer_image" />
      </div>
      <div className="review_content_container">
        <div className="rc_rating_container">
          <img
            src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar.c3a29cce.jpg&w=128&q=75"
            alt=""
          />
          <div>
            <div className="reviewer_name">{BrilliantJob[0]?.client_name}</div>
            <div className="reviewer_company">
              {BrilliantJob[0]?.client_designation}
            </div>
          </div>
        </div>
        <div className="rc_review">{BrilliantJob[0]?.review}</div>
        <div className={`rc_video_container ${osClass}`}>
          <ReactPlayer
            muted={true}
            playing={true}
            loop={true}
            width="100%"
            height="auto"
            url={BrilliantJob[0]?.video_url}
            playsinline
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewCard;
