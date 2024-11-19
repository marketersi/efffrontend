'use client';
import React, { useEffect } from 'react';
import './consulting.css';
import PricingOption from '@/components/organisms/marketing-consulting/pricing/PricingOptions';
import StandOut from '@/components/organisms/marketing-consulting/stand-out/StandOut';
import SelectedProjects from '@/components/organisms/marketing-consulting/selected-projects/SelectedProjects';
import CustomersReview from '@/components/organisms/marketing-consulting/customers-review/CustomersReview';
import WhatToExpect from '@/components/organisms/marketing-consulting/expectation/WhatToExpect';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CONSULTING_SCREEN_DATA } from '@/redux/konsultacje/consultingAction';
import Loader from '@/components/organisms/animation/Loader';
import { FETCH_PRICELIST_SCREEN_DATA } from '@/redux/cennik/pricelistAction';
import BounceLoader from 'react-spinners/BounceLoader';

const MarketingConsulting = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  if (screenData) {
    console.log('consulting screen data from UI => ', screenData);
  }

  const { screenData: PriceScreenData } = useSelector(
    (state) => state.priceList
  );
  const { Form } = PriceScreenData?.PricingOption || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_CONSULTING_SCREEN_DATA });
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
  }, []);

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <div>
        <PricingOption />
        <StandOut />
        <SelectedProjects />
        <CustomersReview />
        <WhatToExpect />
      </div>
    </>
  );
};

export default MarketingConsulting;
