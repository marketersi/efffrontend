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
import ImplementationEx301 from './examples/implementationEx301';
import ImplementationEx302 from './examples/implementationEx302';
import CustomerReview4 from '../customer-review/CustomerReview4';

const ImplementationExamples = () => {
  return (
    <>
      <ImplementationExample1 />

      <ImplementationExample2 />

      <section className='additonal-gap2'>
      <CustomerReview />
      </section>

      <ImplementationEx3 />
      <section className="additional-gap2">
      <CustomerReview4 />
      </section>

      <ImplementationEx301 />
      {/* <section className="additional-gap2">
      <CustomerReview />
      </section> */}

      <ImplementationEx302 />
      

      <section className="additional-gap2">
      <CustomerReview2 />
      </section>

      <ImplementationEx4 />

      {/* <ImplementationEx5 /> 

      {/* <section className="additional-gap2">
      <CustomerReview3 />
      </section> */}

      {/* <ImplementationEx6 /> */}

      {/* Curved Image */}
      {/* <img
        src="https://cdn.owocni.pl/img/single-projektowanie-nazw/luk-purple.png"
        className="cname-big-mtop-2 projects-bow-1"
        alt=""
      ></img> */}

      {/* <ImplementationEx7 /> */}
      {/* <img
        src="https://cdn.owocni.pl/img/single-projektowanie-nazw/luk-black.png"
        className="projects-bow-1 names-bow-bgcolor-purple"
        style={{ marginTop: '-127px' }}
        alt=""
      ></img> */}

      {/* <ImplementationEx8 /> */}

      {/* to be deleted */}
      {/* <NazwaSlider /> */}

      <section className="black-sec-form">
        <div className="copywriter-ending-1 text-center mobilechangeFont">
        Przekształćmy <br/> Twoje wizje <br />w sukcesy!
        </div>
        <Form />
      </section>
    </>
  );
};

export default ImplementationExamples;
