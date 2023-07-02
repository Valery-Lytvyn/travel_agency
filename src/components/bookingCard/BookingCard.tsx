import TextButton from "../textButton/TextButton";
import "./bookingCard.scss";

function BookingCard() {
  return (
    <form className="section_card booking_card">
      <div className="input_box">
        <h2 className="input_box_label">where to</h2>
        <input type="text" placeholder="place name" />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">how many</h2>
        <input type="number" placeholder="number of guests" />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">arrival</h2>
        <input type="date" />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">leaving</h2>
        <input type="date" />
      </div>
      <TextButton text="book now" />
    </form>
  );
}

export default BookingCard;
