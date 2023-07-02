import Ratings from "../../components/retings/Ratings";
import { MAX_RATING } from "../../constant/indexData";
import { PREVENT_EMOJI } from "../../constant/reviewsData";
import { getRndInteger } from "../../services/services";
import "./reviewCard.scss";

interface ReviewCardProps {
  emoji: number;
  userName: string;
  review: string;
}

function ReviewCard({ emoji, userName, review }: ReviewCardProps) {
  return (
    <div className="section_card review_card">
      <span className="emoji">
        {String.fromCodePoint(emoji ? emoji : PREVENT_EMOJI)}
      </span>
      <h2 className="review_user_name">{userName}</h2>
      <p className="review_text">{review}</p>
      <Ratings rating={getRndInteger(MAX_RATING)} />
    </div>
  );
}

export default ReviewCard;
