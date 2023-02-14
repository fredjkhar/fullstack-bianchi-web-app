import React, { useEffect, useState } from "react";

import getAvailableTimeSlots, { availableTimeSlots } from "./AvailableBookings";

import "./booking.scss";

const Booking = ({ bookings, value, setTime }) => {
  const [availableSelectedDayTimeSlots, setAvailableSelectedDayTimeSlots] =
    useState([]);

  useEffect(() => {
    getAvailableTimeSlots(value, bookings, setAvailableSelectedDayTimeSlots);
  }, [value, bookings]);

  const handleClick = (timeSlot) => {
    setTime(timeSlot);
  };

  return (
    <div className="time-rows">
      {availableTimeSlots.map((timeSlot, i) => (
        <div
          className={
            "right-row " +
            (!availableSelectedDayTimeSlots.includes(timeSlot) && " booked")
          }
        >
          <div key={i + "_text"} className="time-slot">
            {timeSlot.length === 8
              ? timeSlot.substring(0, 5)
              : timeSlot.substring(0, 4)}
          </div>
          <div
            key={i}
            className="right-button"
            onClick={() => handleClick(timeSlot)}
          >
            {availableSelectedDayTimeSlots.includes(timeSlot) ? "select" : "booked"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
