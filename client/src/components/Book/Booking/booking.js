import React, { useEffect, useState } from "react";

import getAvailableTimeSlots, { availableTimeSlots } from "./AvailableBookings";

import "./booking.scss";

const Booking = ({ bookings, value, setTime }) => {
  const [availableSelectedDayTimeSlots, setAvailableSelectedDayTimeSlots] =
    useState([]);

  useEffect(() => {
    getAvailableTimeSlots(value, bookings, setAvailableSelectedDayTimeSlots);
  }, [value, bookings]);

  const handleClick = (timeSlot,e) => {
    setTime(timeSlot);
    e.target.value = "selected";
  };

  return (
    <div className="time-rows">
      {availableTimeSlots.map((timeSlot, index) => (
        <div
          className={
            "right-row " +
            (!availableSelectedDayTimeSlots.includes(timeSlot) && " booked")
          }
        >
          <div key={index} className="time-slot">
            {timeSlot.length === 8
              ? timeSlot.substring(0, 5)
              : timeSlot.substring(0, 4)}
          </div>
          <div
            key={index + "btn"}
            className="right-button"
            onClick={(e) => availableSelectedDayTimeSlots.includes(timeSlot) && handleClick(timeSlot,e)}
          >
            {availableSelectedDayTimeSlots.includes(timeSlot) ? "select" : "booked"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
