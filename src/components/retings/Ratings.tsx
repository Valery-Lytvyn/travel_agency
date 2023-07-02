import StarRatings from "react-star-ratings";

interface RatingsProps {
  rating: number | string;
}

function Ratings({ rating }: RatingsProps) {
  let newRating: number;
  if (typeof rating === "number") {
    newRating = rating;
  } else {
    newRating = +rating;
  }

  return (
    <StarRatings
      rating={newRating}
      starDimension="1.6rem"
      starSpacing=".2rem"
      starRatedColor="#ffa500"
    />
  );
}

export default Ratings;
