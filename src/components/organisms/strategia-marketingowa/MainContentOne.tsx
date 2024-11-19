import { useSelector } from "react-redux";

export default function MainContentOne() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  console.log("screen data strategia", screenData);
  const { MainContentOne } = screenData.MainContent || {};

  return (
    <div className="MainContentOne content">
      <div className="MainContentOne_Container">
        {MainContentOne?.description}
      </div>
    </div>
  );
}
