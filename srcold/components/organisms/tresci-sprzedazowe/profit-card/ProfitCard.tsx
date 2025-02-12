import { useState } from "react";
import Image from "next/image";
import "./ProfitCard.css";

const ProfitCard = () => {
  const [sliderValues, setSliderValues] = useState({
    profit_slider_range1: 10000,
    profit_slider_range2: 5,
    profit_slider_range3: 5,
  });

  const handleSliderChange = (event: any) => {
    const { id, value } = event.target;
    setSliderValues((prevValues) => ({
      ...prevValues,
      [id]: Number(value),
    }));
  };

  const calculateValue = () => {
    const k1 = 0.5;
    const k2 = 0.5;
    const k3 = 0.5;
    const value =
      k1 * (sliderValues.profit_slider_range1 - 1000) +
      k2 * sliderValues.profit_slider_range2 +
      k3 * (sliderValues.profit_slider_range3 - 5);
    return value;
  };

  const formatWithThousandSeparator = (value: any) => {
    return value.toLocaleString("en-US");
  };

  return (
    <div className="ProfitCard content">
      <div className="ProfitCard_Container full">
        <div className="ProfitCard_Content">
          <div className="ProfitCard_Image">
            <Image
              src={"/assets/images/strategiamarketingowa/profitcardimage.jpg"}
              alt="Profit Card Image"
              height={192}
              width={287}
            />
          </div>
          <div className="ProfitCard_Title">
            Użyj zielonych suwaków, aby
            <br />
            dopasować poglądowe wartości
          </div>
          <div className="ProfitCardSliderContainer">
            <div className="ProfitSliderCard">
              <div className="ProfitSliderCard_Header">
                {formatWithThousandSeparator(sliderValues.profit_slider_range1)}
              </div>
              <div className="ProfitSliderCard_Content">
                Ilość ludzi, którzy zobaczą tekst.
              </div>
              <input
                type="range"
                id="profit_slider_range1"
                name="profit_slider_range1"
                min="1000"
                max="100000"
                style={{ width: "100%" }}
                value={sliderValues.profit_slider_range1}
                onChange={handleSliderChange}
              />
            </div>
            <div className="ProfitSliderCard">
              <div className="ProfitSliderCard_Header">
                {sliderValues.profit_slider_range2} %
              </div>
              <div className="ProfitSliderCard_Content">
                Skuteczność treści w przekonywaniu klientów.
              </div>
              <input
                type="range"
                id="profit_slider_range2"
                name="profit_slider_range2"
                min="0"
                max="100"
                style={{ width: "100%" }}
                value={sliderValues.profit_slider_range2}
                onChange={handleSliderChange}
              />
            </div>
            <div className="ProfitSliderCard">
              <div className="ProfitSliderCard_Header">
                {formatWithThousandSeparator(sliderValues.profit_slider_range3)}{" "}
                zł
              </div>
              <div className="ProfitSliderCard_Content">
                Średni dochód firmy z 1 transakcji z klientem.
              </div>
              <input
                type="range"
                id="profit_slider_range3"
                name="profit_slider_range3"
                min="5"
                max="10000"
                style={{ width: "100%" }}
                value={sliderValues.profit_slider_range3}
                onChange={handleSliderChange}
              />
            </div>
          </div>
          <div className="ProfitCard_EstimatedProfitTitle">SZACOWANY ZYSK:</div>
          <div className="ProfitCard_EstimatedProfit">
            {calculateValue().toFixed(0)} zł
          </div>
          <div className="ProfitCard_ButtonContainer">
            <button className="ProfitCard_Button">
              O.K. wyślijcie mi niezobowiązującą ofertę.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
