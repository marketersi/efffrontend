import Image from "next/image";
import {useSelector} from 'react-redux'

export default function MainNumber() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { MainNumber } = screenData.MainContent || {};

  return (
    <div className="MainNumber content">
      <div className="MainNumber_Container">
        {/* <div className="MainNumber_One">
          <div className="MainNumber_One_Content">
            {MainNumber?.info_1}
          </div>
          <div>
            <Image
              src={MainNumber?.percentage_image_1}
              alt="MainNumberImage1"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div> */}
        <div className="MainNumber_Two">
          <div className="MainNumber_Two_Content">
            {MainNumber?.info_2}
          </div>
          <div>
            <Image
              src={MainNumber?.percentage_image_2}
              alt="MainNumberImage2"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="MainNumber_Two_Footer">
            <div>* </div>
            <div>
              {MainNumber?.asterisk_text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
