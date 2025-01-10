"use client";
import React, { useEffect, useState } from "react";
import "./uxDesign.css";
import UxBanner from "@/components/organisms/ux/UxBanner";
import Counter from "@/components/organisms/ux/Counter";
import Competitions from "@/components/organisms/ux/Competitions";
import Market from "@/components/organisms/ux/Market";
import IgnoreSites from "@/components/organisms/ux/IgnoreSites";
import Complex from "@/components/organisms/ux/Complex";
import Systemically from "@/components/organisms/ux/Systemically";
import UxVideo from "@/components/organisms/ux/UxVideo";
import GoodProcess from "@/components/organisms/ux/GoodProcess";
import WebSite from "@/components/organisms/ux/WebSite";
import Slider from "@/components/organisms/ux/UxSlider/Slider";
import Executive from "@/components/organisms/ux/Executive";
import UxAccordion from "@/components/organisms/ux/accordion/UxAccordion";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_UX_SCREEN_DATA } from "@/redux/ux/uxDesignAction";
import Process from "@/components/organisms/ux/ZigZagDots";
import { clearPriceListFormData } from "@/redux/cennik/pricelistSlice";
import BounceLoader from "react-spinners/BounceLoader";

import CardOne from "@/components/organisms/cennik/menu-one/CardOne";
import CardTwo from "@/components/organisms/cennik/menu-two/CardTwo";
import CardThree from "@/components/organisms/cennik/menu-three/CardThree";
import CardFour from "@/components/organisms/cennik/menu-four/CardFour";
import CardFive from "@/components/organisms/cennik/menu-five/CardFive";
import CardSix from "@/components/organisms/cennik/menu-six/CardSix";
import { FETCH_PRICELIST_SCREEN_DATA } from "@/redux/cennik/pricelistAction";

const UXDesignScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_UX_SCREEN_DATA });
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
    dispatch(clearPriceListFormData());
  }, [dispatch]);

  return (
    <>
      <UxBanner />
      <Counter />
      <Competitions />
      <Market />
      <IgnoreSites />
      <Complex />
      <Systemically />
      <UxVideo />
      {/* <Process /> */}
      <GoodProcess />
      <WebSite />
      <Slider />
      <Executive />
      <UxAccordion />
    </>
  );
};

export default UXDesignScreen;
