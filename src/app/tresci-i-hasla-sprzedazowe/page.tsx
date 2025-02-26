"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FETCH_SALES_SCREEN_DATA } from "@/redux/tresci/salescontentAction";
import Concept366 from "@/components/organisms/tresci-sprzedazowe/366-concept/Concept366";
import BusinessTools from "@/components/organisms/tresci-sprzedazowe/business_tools/BusinessTools";
import FAQ from "@/components/organisms/tresci-sprzedazowe/faq/Faq";
import Form from "@/components/organisms/tresci-sprzedazowe/form/Form";
import Guarantee from "@/components/organisms/tresci-sprzedazowe/guarantee/Guarantee";
import InkBook from "@/components/organisms/tresci-sprzedazowe/ink-book/InkBook";
import Mako from "@/components/organisms/tresci-sprzedazowe/mako/Mako";
import Motus from "@/components/organisms/tresci-sprzedazowe/motus/Motus";
import OptionBox2 from "@/components/organisms/tresci-sprzedazowe/options-box2/OptionBox2";
import Orange from "@/components/organisms/tresci-sprzedazowe/orange/Orange";
import PriceList from "@/components/organisms/tresci-sprzedazowe/price-list/PriceList";
// import Profit from "@/components/organisms/tresci-sprzedazowe/profit-slider/Profit";
import Robo from "@/components/organisms/tresci-sprzedazowe/robo/Robo";
import SalesBanner from "@/components/organisms/tresci-sprzedazowe/sales_banner/SalesBanner";
import Section5 from "@/components/organisms/tresci-sprzedazowe/section5/Section5";
import "./sales.css";
import TresciFooter from "@/components/organisms/tresci-sprzedazowe/tresci-footer/TresciFooter";

const Sales = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { quoteSection, faq, projects, heroSection } = screenData || {};
  const { faqAQ } = faq || [];
  const { projectSection1, projectSection3, projectSection5, projectSection7 } =
    projects || {};
  const { customerReview } = projectSection3 || {};
  const { customerReview: customerReview3 } = projectSection5 || {};
  const { customerReview: customerReview4 } = projectSection7 || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_SALES_SCREEN_DATA });
  }, [dispatch]);
  return (
    <>
      <SalesBanner />
      <section className="sale_bottom_text copywriter-page">
        <div className="container copyuwriter-custom-push-1">
          <div className="row">
            <div className="col-md-12 text-center copywriter-custom-margin-1">
              <h1 className="copywriter-big-header">
                {/* {heroSection?.title} */}W Marketersi wiemy, że dobrze
                dobrane słowa nie tylko przyciągają uwagę, ale też potrafią
                skutecznie zmieniać zainteresowanie w konkretne, mierzalne
                wyniki.
              </h1>

              <span className="copywriter-big-subheader copywriter-cmargin-1">
                {/* {heroSection?.description} */}
                Nasze treści sprzedażowe nie tylko informują, ale przede
                wszystkim inspirują Twoich odbiorców do działania – od zapytania
                ofertowego, przez zakup, po długoterminowe zaangażowanie.
              </span>
            </div>
          </div>
        </div>
      </section>
      <OptionBox2 optionBox2={quoteSection} />
      <BusinessTools />
      <Section5 />
      <FAQ faq={faq} />
      <Guarantee />
      <PriceList />
      <Form />
      <div
        className="copywriter-custom-header-2 text-left copywriter-cmargin-4 menu-target prywidthManage"
        id="sec2"
      >
        {/* {projectSection1?.title} */}
        Przykładowe realizacje.
        <br /> Tworzymy To, <br /> Co Zapada w Pamięć.
      </div>
      <div className="copywriter-custom-subheader-2 text-center">
        {projectSection1?.sub_title}
      </div>
      {/* <Orange /> */}
      {/* <Motus /> */}
      {/* <OptionBox2 optionBox2={customerReview} /> */}
      <Concept366 />
      <OptionBox2 optionBox2={customerReview3} />
      <Robo />
      <Mako />
      <OptionBox2 optionBox2={customerReview4} />
      <InkBook />
      <OptionBox2 optionBox2={customerReview} />
      {/* <Profit /> */}
      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center mobilechangeFont">
        
          Przekształćmy <br/> Twoje wizje <br />w sukcesy!
        </div>
        <Form />
      </section>
      <TresciFooter />
    </>
  );
};

export default Sales;
