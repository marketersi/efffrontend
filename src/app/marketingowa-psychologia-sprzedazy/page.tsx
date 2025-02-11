"use client";
import Loader from "@/components/organisms/animation/Loader";
import FactsContainer from "@/components/organisms/facts/facts-container/FactsContainer";
import Hero from "@/components/organisms/facts/hero/Hero";
import { FETCH_FACTS_SCREEN_DATA } from "@/redux/faktow/factActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FactsOfPsychology = () => {
  const { isLoading, screenData } = useSelector((state) => state.facts);
  const dispatch = useDispatch();

  if (screenData) {
    console.log("facts screen data from UI => ", screenData);
  }

  useEffect(() => {
    dispatch({ type: FETCH_FACTS_SCREEN_DATA });
  }, [dispatch]);

  return (
    <>
        <>
          <Hero />
          <FactsContainer />
        </>
    </>
  );
};

export default FactsOfPsychology;
