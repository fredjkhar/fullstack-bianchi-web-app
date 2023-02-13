import React, { useState, useRef } from "react";
import Booking from "./Booking/booking";
import { useAppContext } from "../../providers/appProvider";
import validateBookingForm from "./Booking/validateBooking";

import "./book.scss";

const Book = () => {
  const { value, bookings, displayTimeSlots } = useAppContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [time, setTime] = useState("");

  const [alert, setAlert] = useState(false);

  const ref = useRef({
    alertMessage: "",
  });

  const URL_booking = "http://localhost:8080/booking";
  const handleClick = (e) => {
    e.preventDefault();
    const date = value.clone().format("YYYY-MM-DD");
    const booking = {
      date,
      name,
      phone,
      time,
    };
    const result = validateBookingForm(booking);
    if (result) {
      ref.current.alertMessage = result;
      setAlert(true);
      console.log(ref.current.alertMessage);
    } else {
      console.log(booking);
      fetch(URL_booking + "/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      }).then((response) => console.log(response));
    }
  };

  return (
    <section className="book">
      {displayTimeSlots && (
        <div className="wrapper">
          <div className="left-section">
            <div className="">
              <div className="left-title">
                {value.clone().format("MMMM DD YYYY")}
              </div>
              <Booking bookings={bookings} value={value} setTime={setTime} />
            </div>
          </div>
          <div className="right-section">
            {alert && (
              <div className="booking-alert">{ref.current.alertMessage}</div>
            )}

            <form>
                <label>
                  <p>Name</p>
                  <input
                    name="name"
                    type="text"
                    maxLength={255}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <p>Phone</p>
                  <input
                    name="phone"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Ex: 375 987 6987"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  <input
                    name="checkbox"
                    type="checkbox"
                    required
                    value={checked}
                    onChange={(e) => setChecked(e.target.value)}
                  />
                  Confirm selected time slot
                </label>
              <button type="submit" onClick={handleClick}>
                Book
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Book;
