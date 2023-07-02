import { useState } from "react";
import TextButton from "../textButton/TextButton";
import "./bookingCard.scss";

function BookingCard() {
  const [place, setPlace] = useState("");
  const [guests, setGuests] = useState("");
  const [arrival, setArrival] = useState("");
  const [leaving, setLeaving] = useState("");

  const handleBookNow = () => {
    setPlace("");
    setGuests("");
    setArrival("");
    setLeaving("");
  };

  return (
    <form className="section_card booking_card">
      <div className="input_box">
        <h2 className="input_box_label">where to</h2>
        <input
          type="text"
          value={place}
          placeholder="place name"
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">how many</h2>
        <input
          type="number"
          value={guests}
          placeholder="number of guests"
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">arrival</h2>
        <input
          type="date"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
      </div>
      <div className="input_box">
        <h2 className="input_box_label">leaving</h2>
        <input
          type="date"
          value={leaving}
          onChange={(e) => setLeaving(e.target.value)}
        />
      </div>
      <TextButton text="book now" onClick={handleBookNow} />
    </form>
  );
}

export default BookingCard;
