import LazyImage from "../../components/lazyImage/LazyImage";
import TextButton from "../../components/textButton/TextButton";
import Ratings from "../retings/Ratings";
import pin from "../../assets/icon/pin-64.png";
import "./offerCard.scss";

interface OfferCardProps {
  cityName: string;
  photo: string;
  description: string;
  rating: number;
  newPrice: string;
  price: string;
}

function OfferCard({
  cityName,
  photo,
  description,
  rating,
  newPrice,
  price,
}: OfferCardProps) {
  return (
    <div className="offer_card">
      <div className="offer_image">
        <LazyImage src={photo} alt={cityName} />
      </div>
      <div className="offer_details">
        <div className="offer_city">
          <div className="pin_image">
            <img src={pin} alt="pin" />
          </div>
          <h3 className="offer_city_name">{cityName}</h3>
        </div>
        <p>{description}</p>
        <Ratings rating={rating} />
        <div className="offer_price">
          <p>{newPrice}</p>
          <p className="offer_old_price">{price}</p>
        </div>
        <TextButton text="book now" />
      </div>
    </div>
  );
}

export default OfferCard;
