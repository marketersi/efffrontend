import React from 'react';
import style from './afterbanner.module.css';
import { Container, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PricingOption from '../../marketing-consulting/pricing/PricingOptions'

const AfterBanner = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const { brandSection, companySection } = screenData;

  return (
    <div className={style.afterBanner}>
      {/* <Container> */}
        <div className={style.democontainer}>
          <h1> Video marketing, <br /> który napędza rozwój <br />Twojej marki!</h1>
        
          <div className={style.BannerSubTitle}> Przekształcamy widzów w lojalnych <br />   klientów.</div>
        
          <div className={style.BannerSupSubTitle}>Z nami Twoje filmy budują<br />   relacje i zwiększają sprzedaż.</div>

          <div className={style.filowBox}>
            <div className={style.filowBoxFirst}>
              <div className={style.filowBoxFirstInner}>
                <img className={style.filowBoxFirstImg} src="https://images.prismic.io/marketersi/Z-0l6XdAxsiBwOCs_Without-BG-80New.png?auto=format,compress" alt="" />
                <div className={style.filowBoxFirstTitle}>filmów wideo, <br/>publikowanych online <br/>nie osiąga zakładanych <br/>celów marketingowych.</div>
                <img className={style.filowBoxFirstImg2} src="https://images.prismic.io/marketersi/Z-0lx3dAxsiBwOCn_HubSpot_Logo.svg.png?auto=format,compress" alt="" />
              </div>
            </div>
            <div className={style.filowBoxSecond}>
              <div className={style.filowBoxSecondInner}>
                <div className={style.filowBoxSecondTitle}>Tworzymy montaż wideo, <br/>który wywołuje emocje, <br/>buduje profesjonalny <br/>wizerunek Twojej marki i <br/>podnosi sprzedaż na lata.</div>
              </div>
            </div>
          </div>


          

        </div>
      {/* </Container> */}

      <div className={style.demoBigcontainer}>
        <div className={style.SteperSection}>
              
          <div className={style.SteperBox}>
            <div className={style.SteperNumber}>01</div>
            <div className={style.SteperImage}>
              <img src="https://images.prismic.io/marketersi/Z-0nEndAxsiBwODl_step-1.png?auto=format,compress" alt="" />
            </div>
            <h4 className={style.SteperTitle}>Analiza Twojej wizji</h4>
            <p className={style.SteperCont}>Rozmawiamy, analizujemy, słuchamy. Chcemy w pełni zrozumieć Twoją wizję i cele. Omówimy szczegóły surowego materiału, jakie masz oczekiwania wobec efektu końcowego, i dopasujemy styl montażu do charakteru Twojej marki.</p>
          </div>

          <div className={style.SteperBox}>
            <div className={style.SteperNumber}>02</div>
            <div className={style.SteperImage}>
              <img src="https://images.prismic.io/marketersi/Z-0nkndAxsiBwOD8_step-2.png?auto=format,compress" alt="" />
            </div>
            <h4 className={style.SteperTitle}>Przygotowanie koncepcji</h4>
            <p className={style.SteperCont}>Na podstawie Twoich wskazówek i naszych analiz opracowujemy plan montażu. Wybieramy odpowiednią narrację, dynamikę i efekty wizualne, które najlepiej podkreślą Twoją wizję i zaangażują odbiorców.</p>
          </div>

          <div className={style.SteperBox}>
            <div className={style.SteperNumber}>03</div>
            <div className={style.SteperImage}>
              <img src="https://images.prismic.io/marketersi/Z-0nyHdAxsiBwOEK_step-3.png?auto=format,compress" alt="" />
            </div>
            <h4 className={style.SteperTitle}>Postprodukcja</h4>
            <p className={style.SteperCont}>Zaczynamy proces łącząc surowy materiał w spójną całość. Poprzez staranny montaż, dopracowane przejścia, efekty wizualne i dźwiękowe tworzymy film, który przemówi do Twoich odbiorców. Każdy detal jest dopracowany, aby rezultat był zgodny z Twoją wizją i wyróżniał Twoją markę.</p>
          </div>

          <div className={style.SteperBox}>
            <div className={style.SteperNumber}>04</div>
            <div className={style.SteperImage}>
              <img src="https://images.prismic.io/marketersi/Z-0nx3dAxsiBwOEJ_step-4.png?auto=format,compress" alt="" />
            </div>
            <h4 className={style.SteperTitle}>Postprodukcja</h4>
            <p className={style.SteperCont}>Zaczynamy proces łącząc surowy materiał w spójną całość. Poprzez staranny montaż, dopracowane przejścia, efekty wizualne i dźwiękowe tworzymy film, który przemówi do Twoich odbiorców. Każdy detal jest dopracowany, aby rezultat był zgodny z Twoją wizją i wyróżniał Twoją markę.</p>
          </div>

          <div className={style.SteperBox}>
            <div className={style.SteperNumber}>05</div>
            <div className={style.SteperImage}>
              <img src="https://images.prismic.io/marketersi/Z-0nx3dAxsiBwOEI_step-5.png?auto=format,compress" alt="" />
            </div>
            <h4 className={style.SteperTitle}>Postprodukcja</h4>
            <p className={style.SteperCont}>Zaczynamy proces łącząc surowy materiał w spójną całość. Poprzez staranny montaż, dopracowane przejścia, efekty wizualne i dźwiękowe tworzymy film, który przemówi do Twoich odbiorców. Każdy detal jest dopracowany, aby rezultat był zgodny z Twoją wizją i wyróżniał Twoją markę.</p>
          </div>

        </div>
      </div>
{/* 
      <section className="container pb-5">
          <div  className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <h2 className="mt-5 heading-style">{title}</h2>
              <div className="mt-3">
                <p className="subheading">
                  {sub_title
                    ? sub_title.split("/").map((part, index) => (
                        <span className="cennik_description" key={index}>
                          {part.trim()}
                        </span>
                      ))
                    : null}
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
                      <div className="btns_container">
                        <div className="row">
                          <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(1)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 1
                                    ? "#00BFFF"
                                    : // ? '#f0a0a0'
                                      buttonStyle.backgroundColor,
                                color:
                                  isRed === 1 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 1
                                    ? "1px solid #00BFFF"
                                    : buttonStyle.border,
                              }}
                            >
                              {" "}
                              {cardMenu?.menuOne?.menu_title}
                            </button>
                          </div>
                          <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(2)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 2
                                    ? "#00BFFF"
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 2 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 2
                                    ? "1px solid #00BFFF"
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.MenuTwo?.Form?.menu_title}
                            </button>
                          </div>
                        </div>

                        <div className="row mt-lg-3">
                        <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(6)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 6
                                    ? "#00BFFF"
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 6 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 6
                                    ? "1px solid #00BFFF"
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.menuSixth?.menu_title}
                            </button>
                          </div>
                          <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(5)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 5
                                    ? "#00BFFF"
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 5 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 5
                                    ? "1px solid #00BFFF"
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.menuFifth?.menu_title}
                            </button>
                          </div>
                          
                        </div>

                        <div className="row mt-lg-3">
                          <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(3)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 3
                                    ? "#00BFFF"
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 3 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 3
                                    ? "1px solid #00BFFF"
                                    : buttonStyle.border,
                              }}
                            >
                              {cardMenu?.menuThree?.menuText}
                            </button>
                          </div>
                          <div
                            className="col-md-6 col-sm-12"
                            style={{ textAlign: "center" }}
                            onClick={() => handleBtnClick(4)}
                          >
                            <button
                              className="BtnStyle"
                              style={{
                                ...buttonStyle,
                                backgroundColor:
                                  isRed === 4
                                    ? "#00BFFF"
                                    : buttonStyle.backgroundColor,
                                color:
                                  isRed === 4 ? "white" : buttonStyle.color,
                                border:
                                  isRed === 4
                                    ? "1px solid #00BFFF"
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
                  {selectedOption == 5 && (
                    <>
                      <CardFive />
                    </>
                  )}
                  {selectedOption == 6 && (
                    <>
                      <CardSix />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section> */}


      {/* <div className={style.democontainer}>
        <h2>Odblokuj zyski z Marketersi: <br />pierwszy krok ku wielkim zmianom.</h2>
        <p>Wypełnienie naszego prostego formularza to początek <br />ścieżki do odblokowania zysków, zwiększenia <br />widoczności i zapamiętywania Twojej marki.</p>
      </div> */}

    </div>
  );
};

export default AfterBanner;
