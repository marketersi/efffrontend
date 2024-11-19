"use client";
import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { FETCH_UX_SCREEN_DATA } from "@/redux/ux/uxDesignAction";
import Process from "@/components/organisms/ux/Process";

const UXDesignScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_UX_SCREEN_DATA });
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
      <Process />
      <GoodProcess />
      <WebSite />
      <Slider />
      <Executive />
      <UxAccordion />
    </>
  );
};

export default UXDesignScreen;
