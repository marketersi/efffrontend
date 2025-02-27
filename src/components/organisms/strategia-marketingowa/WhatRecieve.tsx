import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function WhatRecieve() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { WhatReceive } = screenData;

  const [WhatRecieve_Dropdown_Show, setWhatRecieve_Dropdown_Show] =
    useState(true);

  return (
    <>
      <div className="WhatRecieve WidthContent">
        {/* One */}
        <div className="WhatRecieve_Title_One">
          Rozpocznij
          <br /> Podróż z Marketersi <br />w znane
        </div>
        <div className="WhatRecieve_Content_One mobilelefttext">
          {WhatReceive?.description_1}
        </div>
        {/* Two */}
        <div className="WhatRecieve_Title_Two">{WhatReceive?.subtitle}</div>
        <div className="WhatRecieve_Content_Two mobilelefttext">
          {WhatReceive?.description_2}
        </div>
        {/* Table */}
        {/* <div className="WhatRecieve_Table">
        <div className="WhatRecieve_Table_Column">
          <div>{WhatReceive?.info_1}</div>
          <div>{WhatReceive?.info_2}</div>
        </div>
        <div className="WhatRecieve_Table_Column">
          <div>{WhatReceive?.info_3}</div>
          <div>{WhatReceive?.info_4}</div>
        </div>
        <div className="WhatRecieve_Table_Column">
          <div>{WhatReceive?.info_5}</div>
          <div>{WhatReceive?.info_6}</div>
        </div>
      </div> */}
        {/* Image 1 */}
        {/* <div
        className="full WhatRecieveImage1"
        style={{ marginBottom: '30px', textAlign: 'center' }}
      >
        <Image
          src={WhatReceive?.image_url_1}
          alt="WhatRecieveImage1"
          height={435}
          width={1200}
        />
      </div> */}
      </div>
      {/* Three */}
      <div className="WhatRecieve_Title_Three mobilecreatetitle">
        Wyobraź sobie, że stoisz <br />
        na rozstajach dróg
        <br /> Twojego biznesowego <br/> sukcesu.
      </div>
      <div className="WhatRecieve WidthContent">
        <div className="WhatRecieve_Content_Three_One mobilelefttext">
          {WhatReceive?.description_4}
        </div>
        <div className="WhatRecieve_Content_Three_Tow mobilelefttext">
          {WhatReceive?.description_5}
        </div>
        {/* Button */}

        <div className="Analysis_Card_Content_Button_Container">
          <div
            className={`${
              WhatRecieve_Dropdown_Show
                ? "Analysis_Card_Content_Button"
                : "Analysis_Card_Content_Button_Clicked"
            }`}
            onClick={() => {
              setWhatRecieve_Dropdown_Show(!WhatRecieve_Dropdown_Show);
            }}
          >
            ▼ {WhatReceive?.button_text}
          </div>
        </div>

        {/* WhatRecieve_Dropdown */}
        <div
          className="WhatRecieve_Dropdown"
          hidden={WhatRecieve_Dropdown_Show}
        >
          <div className="WhatRecieve_Dropdown_TitleOne mobilelefttext">
            {WhatReceive?.description_6}
          </div>
          <div className="WhatRecieve_Dropdown_ContentOne mobilelefttext">
            {WhatReceive?.description_7}
          </div>
          <div className="WhatRecieve_Dropdown_TitleTwo mobilelefttext">
            {WhatReceive?.description_8}
          </div>
          <div className="WhatRecieve_Dropdown_ContentTwo mobilelefttext">
            {WhatReceive?.description_9}
          </div>
        </div>
        <div className="feature" style={{ textAlign: "center" }}>
          <Image
            src={WhatReceive?.image_url_2}
            alt="WhatRecieveImage2"
            height={520}
            width={855}
            style={{ width: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
