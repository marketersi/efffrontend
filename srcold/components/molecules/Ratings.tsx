import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ratingType = {
  rating: number;
  size?: string;
  noShadow?: boolean;
};

const Stars = ({ rating, size, noShadow }: ratingType) => {
  const tempArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FontAwesomeIcon
            icon={faStar}
            className="star"
            style={{ fontSize: size || "" }}
          />
        ) : rating >= number ? (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className="star"
            style={{ fontSize: size || "" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faStar}
            className="empty"
            style={{ fontSize: size || "" }}
          />
        )}
      </span>
    );
  });

  return <div>{tempArray}</div>;
};

export default Stars;
