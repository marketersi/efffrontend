import { useSelector } from "react-redux";

export default function MainContentOne() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  console.log("screen data strategia", screenData);
  const { MainContentOne } = screenData.MainContent || {};

  return (
    <div className="MainContentOne WidthContent">
      <div className="MainContentOne_Container">
        {/* {MainContentOne?.description} */}
        Tworzymy skuteczne strategie, które przyciągają klientów i przynoszą zyski.
      </div>
      <p className="extra-text mobilelefttext">
      Z nami Twój biznes rośnie, a Ty możesz cieszyć się realnymi efektami i trwałą przewagą na rynku!
      </p>
    </div>
  );
}
