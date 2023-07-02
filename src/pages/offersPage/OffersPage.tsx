import OfferCard from "../../components/offerCard/OfferCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { offersDataArr } from "../../constant/offersData";

function OffersPage() {
  return (
    <section className="section">
      <SectionTitle title="Offers" />
      <div className="cards_wrap">
        {offersDataArr.map(
          ({ id, cityName, photo, description, rating, newPrice, price }) => (
            <OfferCard
              key={id}
              cityName={cityName}
              photo={photo}
              description={description}
              rating={rating}
              newPrice={newPrice}
              price={price}
            />
          )
        )}
      </div>
    </section>
  );
}

export default OffersPage;
