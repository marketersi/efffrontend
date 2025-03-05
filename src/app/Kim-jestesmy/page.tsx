'use client';
import React, { useEffect } from 'react';
import style from './team-page.module.css';
import * as TeamComponents from '@/components/organisms/team/team-components/TeamComponents';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TEAM_SCREEN_DATA } from '@/redux/zespol/teamAction';
import OurClients from '../../components/organisms/main/ourclients/OurClients';
import { FETCH_HOME_SCREEN_DATA } from '@/redux/home/homeAction';
import BounceLoader from 'react-spinners/BounceLoader';

const Team = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { card1, card2, section3, section4 } = screenData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TEAM_SCREEN_DATA });
    dispatch({ type: FETCH_HOME_SCREEN_DATA });
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <TeamComponents.Banner />
      <TeamComponents.PersonalCard {...card1} />
      <TeamComponents.FreeSpace />
      <TeamComponents.Support />
      {/* to be deleted */}
      {/* <TeamComponents.ImageSlider /> */}
      <OurClients />
      <section className={`{style.Customers} WidthContent1`}>
        <div className={`${style.teamContent}`}>
          <p className={`{style.customersPara}`} >
            <span className={`${style.mobiletitlefont} titlefontweb`}>{section3?.section_three_header}</span>
            <span className={`${style.normalfontweb}`}>{section3?.section_three_subheader}</span>
          </p>
        </div>
        <TeamComponents.PersonalCard {...card2} />
        <div className={`${style.teamContent} mobilecustomtext`}>
          <p className={style.customersPara1}>To wytrwałość, a nie przypadek kreuje efekty – każdy detal ma znaczenie, a my dbamy o każdy z nich.</p>
        </div>
      </section>
      <TeamComponents.Creative />
      <TeamComponents.Caring />
      <TeamComponents.Culture />
      <TeamComponents.GoodTime />
      <TeamComponents.People />
    </>
  );
};

export default Team;
