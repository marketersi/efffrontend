import Image from "next/image";
import {useSelector} from 'react-redux'

export default function MainNumber() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);

  const { MainNumber } = screenData.MainContent || {};

  return (
    <div className="MainNumber WidthContent">
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
        
          <div className="row revers-divmobile">
          <div className="MainNumber_image_box col-md-3">
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
           
            <div>
              <p>* {MainNumber?.asterisk_text}</p>
            </div>
          </div>
          <div className="MainNumber_Two_Footer col-md-9">
          <p>{MainNumber?.info_2}</p>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
