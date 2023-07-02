import { useState, useEffect } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import Loader from "../../components/loader/Loader";
import ServiceBtn from "../../components/serviceBtn/ServiceBtn";
import { MAX_QUANTITY_REVIEWS } from "../../constant/reviewsData";
import { EMOJI_URL, REVIEWS_URL } from "../../constant/urls";
import { fetchData } from "../../fetch/fetchData";
import prevArrow from "../../assets/icon/left-arrow-64.png";
import nextArrow from "../../assets/icon/right-arrow-64.png";
import "./reviewsPage.scss";

interface ReviewData {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface EmojiData {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: number[];
}

function ReviewsPage() {
  const [reviewsDataArr, setReviewsDataArr] = useState<ReviewData[]>([]);
  const [emojiArr, setEmojiArr] = useState<number[]>([]);
  const [firstVisiblyElement, setFirstVisiblyElement] = useState(0);
  const [lastVisiblyElement, setLastVisiblyElement] = useState(3);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews: ReviewData[] = await fetchData(REVIEWS_URL);
        setReviewsDataArr(reviews.splice(0, MAX_QUANTITY_REVIEWS));
      } catch (error) {
        console.log(error);
      }
    };

    const getEmoji = async () => {
      try {
        const emojisData: EmojiData[] = await fetchData(EMOJI_URL);
        const newEmojisData = emojisData.slice(0, MAX_QUANTITY_REVIEWS);
        const emojis: number[] = newEmojisData.map(
          (item) => +item.htmlCode[0].slice(2, -1)
        );
        setEmojiArr(emojis);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
    getEmoji();
  }, []);

  const prevButtonHandler = () => {
    if (firstVisiblyElement !== 0) {
      setFirstVisiblyElement((prev) => prev - 1);
      setLastVisiblyElement((prev) => prev - 1);
    }
  };
  const nextButtonHandler = () => {
    if (lastVisiblyElement !== MAX_QUANTITY_REVIEWS) {
      setFirstVisiblyElement((prev) => prev + 1);
      setLastVisiblyElement((prev) => prev + 1);
    }
  };

  return (
    <section className="section">
      <SectionTitle title="Reviews" />
      <div className="reviews_wrap">
        {emojiArr.length > 0 && reviewsDataArr.length > 0 ? (
          <>
            <ServiceBtn
              src={prevArrow}
              alt="prev arrow"
              onClick={prevButtonHandler}
            />
            <div className="reviews">
              {reviewsDataArr
                ?.slice(firstVisiblyElement, lastVisiblyElement)
                .map(({ id, title, body }) => {
                  const userName = title.split(" ")[0];
                  const emoji = emojiArr[id];
                  return (
                    <ReviewCard
                      key={id}
                      emoji={emoji}
                      userName={userName}
                      review={body}
                    />
                  );
                })}
            </div>
            <ServiceBtn
              src={nextArrow}
              alt="next_arrow"
              onClick={nextButtonHandler}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}

export default ReviewsPage;
