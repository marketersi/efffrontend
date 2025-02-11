import { useSelector } from "react-redux";

export default function ResultMax() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { resultMax } = screenData;

  return (
    <div className="ResultMax WidthContent">
      <div className="ResultMax_Title feature">Marketersi <br/> Twoja Strategia, <br/> Twoja Przewaga</div>
      <div className="ResultMax_Content_One feature">{resultMax?.subtitle}</div>
      <div className="ResultMax_Content_Two">To przemyślane działania <br/> zamiast przypadkowych strzałów – <br/>każdy ruch ma na celu przybliżyć Cię do ostatecznego sukcesu.</div>
    </div>
  );
}
