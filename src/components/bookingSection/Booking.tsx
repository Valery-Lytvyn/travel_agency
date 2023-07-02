import bookingPhoto from "../../assets/images/booking_photo.webp";
import BookingCard from "../bookingCard/BookingCard";
import LazyImage from "../lazyImage/LazyImage";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./booking.scss";

function Booking() {
  return (
    <section className="section">
      <SectionTitle title="booking" />
      <div className="booking_content">
        <div className="booking_image">
          <LazyImage src={bookingPhoto} alt="tourists" />
        </div>
        <BookingCard />
      </div>
    </section>
  );
}

export default Booking;
