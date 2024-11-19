import ReactModal from "react-modal";
import SurveyModalSelect from "./SurveyModalSelect";
import Image from "next/image";
import CardTwo from "../cennik/menu-two/CardTwo";
import { useSelector } from "react-redux";

export default function SurveyModal(props) {
  // const { isLoading, screenData } = useSelector((state) => state.consulting);
  // const { PricingOption } = screenData || {};
  // const { Form } = screenData?.PricingOption || {};

  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { Form } = screenData?.cardMenu?.MenuTwo || {};

  return (
    <ReactModal
      isOpen={props.showModal}
      contentLabel="Form Modal"
      className="Modal content"
      overlayClassName="Overlay"
    >
      <div className="ModalTitle">
        Zdobądź 3 różne opcje cenowe na marketing swojej firmy.
      </div>
      <div className="ModalContent">
        Przejdź krótki formularz. Zobacz co dla Ciebie zrobimy, ile za to
        policzymy i jak szybko Ci się to zwróci.
      </div>
      <div className="ModalCard">
        <CardTwo form={Form} />
      </div>
      <button className="ModalCloseButton" onClick={props.handleCloseModal}>
        <Image
          src={"/assets/images/strategiamarketingowa/close.svg"}
          alt="Close"
          width={20}
          height={20}
        />
      </button>
    </ReactModal>
  );
}
