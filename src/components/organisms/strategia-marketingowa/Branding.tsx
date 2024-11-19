import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function Branding() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { Branding } = screenData;
  return (
    <div className="Branding content">
      <div className="Branding_Container full">
        {/* <div className="Branding_Content_Container">
          <div className="Branding_Title">{Branding?.title}</div>
          <div className="Branding_Text">{Branding?.description}</div>
        </div> */}
        {/* to be deleted */}
        {/* <div className="Branding_Image">
          <Image
            src={Branding?.image}
            width={635}
            height={371}
            alt="BrandingImage"
          />
        </div> */}
      </div>
    </div>
  );
}
