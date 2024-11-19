'use client';
import React, { useEffect, useState } from 'react';
import CardOne from '@/components/organisms/cennik/menu-one/CardOne';
import CardTwo from '@/components/organisms/cennik/menu-two/CardTwo';
import CardThree from '@/components/organisms/cennik/menu-three/CardThree';
import CardFour from '@/components/organisms/cennik/menu-four/CardFour';
import { FETCH_PRICELIST_SCREEN_DATA } from '@/redux/cennik/pricelistAction';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import './cennik.css';
import { ToastContainer } from 'react-toastify';
import { clearPriceListFormData } from '@/redux/cennik/pricelistSlice';
import BounceLoader from 'react-spinners/BounceLoader';

const PriceListScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { title, sub_title, card_title, card_subtitle, cardMenu } = screenData;
  const { Form } = screenData?.cardMenu?.MenuTwo || {};

  const [isRed, setIsRed] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PRICELIST_SCREEN_DATA });
    dispatch(clearPriceListFormData());
  }, [dispatch]);

  const handleBtnClick = (value) => {
    setIsRed(value);
    setTimeout(() => {
      setSelectedOption(value);
    }, 500);
  };

  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  useEffect(() => {
    if (type) {
      switch (type) {
        case 'Strone':
          handleBtnClick(1);
          break;
        case 'Działania':
          handleBtnClick(2);
          break;
        default:
          break;
      }
    }
  }, [type]);

  const cardStyle = {
    boxShadow:
      '4px 4px 15px rgba(0, 0, 0, 0.15), 0 0 0 #ffffff, 2px 2px 2px #ffffff inset, -2px -2px 2px #c7c7c7 inset',
    borderRadius: '30px',
    padding: '25px 0 15px',
    backgroundColor: 'rgba(247, 247, 247, 1)',
    width: '85%',
    margin: '24px auto',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 25px 10px 25px',
    borderRadius: '100px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(201, 201, 201)',
    fontSize: '18px',
    color: 'black',
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <BounceLoader color="#00bfff" size={50} />
        </div>
      ) : (
        <section className="container pb-5">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <h2 className="mt-5 heading-style">{title}</h2>
              <div className="mt-3">
                <p className="subheading">
                {sub_title ? (
        sub_title.split('/').map((part, index) => (
                  <span className='cennik_description'  key={index}>{part.trim()}</span>
                ))) : null}
                </p>
              </div>

              <div className="card cennikFormCard mt-4" style={cardStyle}>
                <div className="card-body">
                  {selectedOption == null && (
                    <div>
                      <div>
                        <h2 className="card-heading">{card_title}</h2>
                        <p className="card-subheading">{card_subtitle}</p>
                      </div>
                      <div className="btns_container mb-5">
                        <div className="row">
                          <div
                            className="col-lg-6"
                            style={{ textAlign: 'right' }}
                            onClick={() => handleBtnClick(1)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 1
                                    ? '#00BFFF'
                                    // ? '#f0a0a0'
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 1 ? 'white' : buttonStyle.color,
                                border:
                                  isRed === 1
                                    ? '1px solid #00BFFF'
                                    : buttonStyle.border,
                              }}
                            >
                              {' '}
                              {cardMenu?.menuOne?.menu_title}
                            </button>
                          </div>
                          <div
                            className="col-lg-6"
                            style={{ textAlign: 'left' }}
                            onClick={() => handleBtnClick(2)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 2
                                    ? '#00BFFF'
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 2 ? 'white' : buttonStyle.color,
                                border:
                                  isRed === 2
                                    ? '1px solid #00BFFF'
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.MenuTwo?.Form?.menu_title}
                            </button>
                          </div>
                        </div>

                        <div className="row mt-lg-3">
                          <div
                            className="col-lg-6"
                            style={{ textAlign: 'right' }}
                            onClick={() => handleBtnClick(3)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 3
                                    ? '#00BFFF'
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 3 ? 'white' : buttonStyle.color,
                                border:
                                  isRed === 3
                                    ? '1px solid #00BFFF'
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.menuThree?.menuText}
                            </button>
                          </div>
                          <div
                            className="col-lg-6"
                            style={{ textAlign: 'left' }}
                            onClick={() => handleBtnClick(4)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 4
                                    ? '#00BFFF'
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 4 ? 'white' : buttonStyle.color,
                                border:
                                  isRed === 4
                                    ? '1px solid #00BFFF'
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.menuFour?.menu_title}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption == 1 && (
                    <>
                      <CardOne />
                    </>
                  )}

                  {selectedOption == 2 && (
                    <>
                      <CardTwo form={Form} />
                    </>
                  )}

                  {selectedOption == 3 && (
                    <>
                      <CardThree />
                    </>
                  )}

                  {selectedOption == 4 && (
                    <>
                      <CardFour />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      )}
    </>
  );
};

export default PriceListScreen;
