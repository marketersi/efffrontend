import Image from "next/image";
import { useSelector } from "react-redux";

export default function StrategyAction() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { StrategyAction } = screenData;

  return (
    <div className="StrategyAction content">
      <div className="StrategyAction_Container full">
        <div className="StrategyAction_Content_Container">
          <div className="StrategyAction_Content_Title">
            {StrategyAction?.title}
          </div>
          <div className="StrategyAction_Content_TextOne">
            {StrategyAction?.description_1}
          </div>
          <div className="StrategyAction_Content_TextTwo">
            {StrategyAction?.description_2}
          </div>
        </div>
        <div className="StrategyActionImage">
          <Image
            src={StrategyAction?.image_url}
            alt="StrategyActionImage"
            height={364}
            width={652}
          />
        </div>
      </div>
    </div>
  );
}
