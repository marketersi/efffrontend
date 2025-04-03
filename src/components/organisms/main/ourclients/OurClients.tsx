"use client";
import Image from "next/image";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player/file";
import { ClientCarousel, CarouselContext } from "./ClientCarousel";
// import { Variants, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Stars from "@/components/molecules/Ratings";
import "./our-clients.css";
import Link from "next/link";

export default function OurClients() {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { ClientReviews } = screenData || {};
  const { SliderImages, RatingCard, ClientFeedback, FeedbackSummary } =
    ClientReviews || {};
  const { row1, row2, row3, row4 } = SliderImages || {};

  // const slideAnimationLeft: Variants = {
  //   offscreen: {
  //     x: -100,
  //     opacity: 0,
  //   },
  //   onscreen: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       type: "ease",
  //       bounce: 0.4,
  //       duration: 2,
  //     },
  //   },
  // };

  return (
    <>
    <div className="overflow-div">
    <section className="WidthContent1">
      {/* <h2 className="ClinetsHead bottommorespace">Jak wygląda współpraca z Marketersi?</h2>
      <p className="ClinetsPara">Zapytaliśmy setkę naszych klientów i oto, co usłyszeliśmy:</p> */}
    <div className="OurClients WidthContent mobile-mt">
      <div className="OurClients_Marquee full mobile">
        <Marquee autoFill speed={175}>
          {row1?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 1 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "50%",
                  height: "50%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        <Marquee autoFill speed={100}>
          {row2?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 2 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "50%",
                  height: "50%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        <Marquee autoFill speed={100}>
          {row3?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 3 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "50%",
                  height: "50%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        <Marquee autoFill speed={150}>
          {row4?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 4 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "50%",
                  height: "50%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
      </div>
      <div className="OurClients_Card_Container popout">
        <div className="OurClients_Card_One">
          <ClientCarousel slides={ClientFeedback} />
        </div>
        <div className="OurClients_Card_Two mb-0">
          <div>
            <Image
              src={RatingCard?.rating_image}
              alt="OurClientsImage"
              width={250}
              height={180}
              className="rating_image"
            />
          </div>
          <div className="OurClients_Card_Two_Content">
            {RatingCard?.rating_description}
          </div>
        </div>
      </div>
      <div className="OurClients_Marquee full desktop">
        {/* Marquee 1 */}
        <Marquee autoFill speed={175}>
          {row1?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 1 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 2 */}
        <Marquee autoFill speed={100}>
          {row2?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 2 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 3 */}
        <Marquee autoFill speed={100}>
          {row3?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 3 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 4 */}
        <Marquee autoFill speed={150}>
          {row4?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 4 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
      </div>
      {/* to be deleted */}
      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={slideAnimationLeft}
        className="cartAnimation"
      >
        <img src={RatingCard?.left_animated_image} alt="" />
      </motion.div> */}
    </div>
    </section>
    </div>
    </>
  );
}

export const SlideOne = (props) => {
  const {
    client_designation,
    review,
    client_name,
    video_url,
    image_url,
    rating,
  } = props;
  const { handleNext } = useContext(CarouselContext);

  return (
    <>
      {/* Slide 1 */}
      <div className="OurClients_Slide">
        <div className="OurClients_Slide_Title mobile_title">{review}</div>
        
        <div className="OurClients_Slide_Container">
          
            <div className="OurClints_Slide_Image part">
            <Image
              src={image_url}
              alt="OurClientsImage1"
              width={400}
              height={500}
              className="OurClients_Slide_Img"
            />
            </div>
          
          <div className="OurClients_Slide_Content part">
            <div className="OurClients_Slide_Media">
            
              <div className="OurClients_Slide_Media_Video">
                {/* <ReactPlayer
                  url={video_url}
                  playing
                  loop
                  width="60%"
                  height="auto"
                  muted={true}
                  pip={false}
                  playsinline
                /> */}
                {/* ajdjasjkd */}
                <img className="ourClientImg" src={video_url} alt=""/>
              </div>
              <div className="OurClients_Slide_Media_Rating">
              <div className="OurClients_Slide_Star_Rating">
                  <Stars rating={rating} />
                </div>
                <div>
                  <div className="OurClients_Slide_Star_Reviewer">
                    {client_name}
                  </div>
                  <div className="OurClients_Slide_Star_Company">
                    {client_designation}
                  </div>
                </div>
                
              </div>
            </div>
            <div className="OurClients_Slide_Title desktop_title">{review}</div>
            <div className="OurClients_Slide_Button">
          <div className="OurClients_Slide_Button_Text">Następna</div>
          <div className="ArrowButton" onClick={handleNext}>
            <span className="ArrowButton_Arrow">&gt;</span>
          </div>
        </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export const SlideFour = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
  const { ClientReviews } = screenData || {};
  const { FeedbackSummary } = ClientReviews || {};

  return (
    <>
      <div className="OurClients_Slide_Last">
        <div className="OurClients_Card_One_Title">
          {FeedbackSummary?.title}
        </div>
        <div className="OurClients_Card_One_Content">
          {FeedbackSummary?.description}
        </div>
        <div className="OurClients_Card_One_Button_Container">
          <Link className="OurClients_Card_One_Button" href="marketersi-opinie">
            Poznaj wszystkie recenzje
          </Link>
        </div>
      </div>
    </>
  );
};
