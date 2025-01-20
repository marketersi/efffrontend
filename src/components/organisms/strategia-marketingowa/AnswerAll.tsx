import Image from "next/image";
import { useSelector } from "react-redux";

export default function AnswerAll() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { FAQsection } = screenData;

  return (
    <div className="AnswerAll WidthContent">
      <div className="AnswerAll_Title">Odpowiedź jest zawsze jedna:</div>
      <div className="AnswerAll_Image feature" style={{ textAlign: "center" }}>
        <Image
          src={FAQsection?.image_url}
          alt="AnswerAllImage"
          height={299}
          width={1001}
          className="yes_accordion_image"
          style={{ width: "auto" }}
        />
      </div>
    </div>
  );
}
