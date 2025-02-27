import Image from "next/image";
import { useSelector } from "react-redux";

export default function StrategyAction() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { StrategyAction } = screenData;

  return (
    <div className="StrategyAction container-fluid">
      <div className="StrategyAction_Container full row">
        <div className="StrategyAction_Content_Container col-md-6">
          <div className="StrategyAction_Content_Title">
            {StrategyAction?.title}
          </div>
          <div className="StrategyAction_Content_TextOne mobilelefttext">
            {StrategyAction?.description_1}
          </div>
          <div className="StrategyAction_Content_TextTwo mobilelefttext">
            {StrategyAction?.description_2}
          </div>
        </div>
        <div className="StrategyActionImage col-md-6">
          <Image
            src="https://images.prismic.io/marketersi/Z4pYdZbqstJ99kkQ_robot.png?auto=format,compress"
            alt="StrategyActionImage"
            height={364}
            width={652}
          />
        </div>
      </div>
    </div>
  );
}
