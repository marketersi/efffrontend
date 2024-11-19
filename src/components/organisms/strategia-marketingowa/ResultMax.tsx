import { useSelector } from "react-redux";

export default function ResultMax() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { resultMax } = screenData;

  return (
    <div className="ResultMax content">
      <div className="ResultMax_Title feature">{resultMax?.title}</div>
      <div className="ResultMax_Content_One feature">{resultMax?.subtitle}</div>
      <div className="ResultMax_Content_Two">{resultMax?.description}</div>
    </div>
  );
}
