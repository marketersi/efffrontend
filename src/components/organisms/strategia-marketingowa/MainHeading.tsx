import Image from "next/image";
import { useSelector } from "react-redux";

export default function MainHeading() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { hero } = screenData;

  return (
    <div className="MainHeading content">
      <div className="MainHeading_Container full">
        <div className="mainHeadingContent">
          <div className="MainHeading_Title">
            <span>{hero?.title && hero.title.split(" ")[0]}</span>
          </div>
          <div className="MainHeading_SecondTitle">
            {hero?.title && hero.title.split(" ").slice(1).join(" ")}
          </div>
          <div className="MainHeading_Content">
            {hero?.subtitle}
          </div>
        </div>
        <div className="MainHeading_Image">
          <Image
            src={hero?.image_url}
            alt="MainHeadingImage"
            width={755}
            height={512}
          />
        </div>
      </div>
    </div>
  );
}
