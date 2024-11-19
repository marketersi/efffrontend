import Image from "next/image";
import { useSelector } from "react-redux";

export default function Strategy() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { strategy } = screenData;

  return (
    <div className="Strategy content">
      <p className="Strategy_Title">{strategy?.title}</p>
      <div className="Strategy_Cards feature">
        {strategy?.featureList?.map((item) => (
          <div className="Strategy_Card" key={item.id}>
            <div className="Strategy_Card_Title">
              <div className="Strategy_Card_Title_Number">
                {item.item_number}
              </div>
              <div>{item.title}</div>
            </div>
            {/* <div>
            <img
             className="strategyImg"
              src={item.image_url}
              alt="Dopasowana"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div> */}
            <div className="Strategy_Card_Content_One">{item.paragraph_1}</div>
            <div className="Strategy_Card_Content_Two">{item.paragraph_2}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
