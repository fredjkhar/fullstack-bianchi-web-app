import React, { useEffect, useState } from "react";

import moment from "moment";
import Calendar from "./Calendar/calendar";
import Booking from "./Booking/booking";

import "./book.scss";

const Book = () => {
  const [value, setValue] = useState(moment());
  const [bookings, setBookings] = useState([]);

  const URL_booking = "http://localhost:8080/booking";

  useEffect(() => {
    fetch(URL_booking + "/getAll")
      .then((response) => response.json())
      .then((responseData) => setBookings(responseData));
  }, []);

  return (
    <section className="book">
      <div className="wrapper">
        <div className="left-section">
          <div className="left-title">Call & Booking</div>
          <div className="left-sub-title">Phone and Address</div>
          <div className="left-text">
            <p>234 Carlson St, Oshawa, P2R 6T4</p>
            <p>Phone: +1 787 395 9879</p>
            <p>Email: bianchi@barbershop.com</p>
          </div>
          <Calendar value={value} onChange={setValue} />
        </div>
        <div className="right-section">
          <div className="right-title">
            {value.clone().format("MMMM DD YYYY")}
          </div>
          <Booking bookings={bookings} value={value}/>
        </div>
      </div>
    </section>
  );
};

export default Book;
