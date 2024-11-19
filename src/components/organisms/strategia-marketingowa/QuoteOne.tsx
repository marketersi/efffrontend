import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function QuoteOne() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { quoteOne } = screenData;

  return (
    <div className="QuoteOne content">
      {/* to be deleted: display none for now */}
      <div className="QuoteOne_Image full" style={{ display: 'none' }}>
        <img src={quoteOne?.image} alt="QuoteOneImage" />
      </div>
      <div className="QuoteOne_Text feature">{quoteOne?.bottom_title}</div>
    </div>
  );
}
