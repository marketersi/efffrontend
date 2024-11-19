import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function QuoteTwo() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { quoteTwo } = screenData;

  return (
    <div className="QuoteTwo content">
      <div className="QuoteTwo_Title feature">{quoteTwo?.title_1}</div>
      <div className="QuoteTwo_TextOne">{quoteTwo?.description_1}</div>
      <div className="QuoteTwo_TextTwo">{quoteTwo?.description_2}</div>
      {/* to be deleted */}
      {/* <div className="QuoteTwo_Image full">
        <Image
          src={quoteTwo?.image}
          alt="QuoteTwoImage"
          width={2000}
          height={1044}
          style={{
            left: '50%',
          }}
        />
      </div> */}
      <div className="clientReviewHeading">
        <h2>{quoteTwo?.title_2}</h2>
      </div>
    </div>
  );
}
