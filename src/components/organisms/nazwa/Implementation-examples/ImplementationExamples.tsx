import React from 'react';
import ImplementationExample1 from './examples/ImplementaionEx';
import ImplementationExample2 from './examples/ImplementaionEx2';
import CustomerReview from '../customer-review/CustomerReview';
import ImplementationEx3 from './examples/ImplementationEx3';
import CustomerReview2 from '../customer-review/CustomerReview2';
import ImplementationEx4 from './examples/ImplementationEx4';
import CustomerReview3 from '../customer-review/CustomerReview3';
import ImplementationEx5 from './examples/ImplementationEx5';
import ImplementationEx6 from './examples/ImplementationEx6';
import ImplementationEx7 from './examples/ImplementationEx7';
import ImplementationEx8 from './examples/ImplementationEx8';
import Profit from '../../tresci-sprzedazowe/profit-slider/Profit';
import Form from '../../tresci-sprzedazowe/form/Form';
import './examples.css';
import NazwaSlider from '../NazwaSlider';

const ImplementationExamples = () => {
  return (
    <>
      <ImplementationExample1 />

      <ImplementationExample2 />

      <CustomerReview />

      <ImplementationEx3 />

      <CustomerReview2 />

      <ImplementationEx4 />

      <ImplementationEx5 />

      <CustomerReview3 />

      {/* <ImplementationEx6 /> */}

      {/* Curved Image */}
      {/* <img
        src="https://cdn.owocni.pl/img/single-projektowanie-nazw/luk-purple.png"
        className="cname-big-mtop-2 projects-bow-1"
        alt=""
      ></img> */}

      <ImplementationEx7 />
      {/* <img
        src="https://cdn.owocni.pl/img/single-projektowanie-nazw/luk-black.png"
        className="projects-bow-1 names-bow-bgcolor-purple"
        style={{ marginTop: '-127px' }}
        alt=""
      ></img> */}

      <ImplementationEx8 />

      {/* to be deleted */}
      {/* <NazwaSlider /> */}

      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center">
          Zróbmy razem <br />
          coś fajnego
        </div>
        <Form />
      </section>
    </>
  );
};

export default ImplementationExamples;
