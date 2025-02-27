import { useSelector } from "react-redux";

export default function MainContentTwo() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { MainContentTwo } = screenData.MainContent || {};

  return (
    <div className="MainContentTwo container-fluid">
      <div className="row main-content-row">
        <div className="MainContentTwo_Container col-md-6">
          <p className="mobilelefttext">{MainContentTwo?.paragraph_1}</p>
          <p className="mobilelefttext">{MainContentTwo?.paragraph_2}</p>
          <p className="mobilelefttext">{MainContentTwo?.paragraph_3}</p>

          <p className="mobilelefttext">
            {MainContentTwo?.paragraph_4}
            <br />
            {MainContentTwo?.paragraph_5}
          </p>
        </div>
        <div className="col-md-6 imagboxmainhead">
          <img
            src="https://images.prismic.io/marketersi/Z4pKlZbqstJ99kIC_Zo0UOR5LeNNTw7vb_Untitleddesign-1-.png?auto=format,compress"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
