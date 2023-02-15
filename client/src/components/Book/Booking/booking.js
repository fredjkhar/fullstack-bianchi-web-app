import React, { useEffect, useState } from "react";

import getAvailableTimeSlots, { availableTimeSlots } from "./AvailableBookings";

import "./booking.scss";

const Booking = ({ bookings, value, setTime }) => {
  const [availableSelectedDayTimeSlots, setAvailableSelectedDayTimeSlots] =
    useState([]);

  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    getAvailableTimeSlots(value, bookings, setAvailableSelectedDayTimeSlots);
  }, [value, bookings]);

  const handleClick = (timeSlot, e) => {
    setTime(timeSlot);
    if (e.target.innerText === "Select") {
      if (selectedSlot) {
        selectedSlot.innerText = "Select";
        selectedSlot.style.backgroundColor = "#7e6c33";
        selectedSlot.style.color = "white";
        setSelectedSlot(null);
      }
      e.target.innerText = "Selected";
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
      setSelectedSlot(e.target);
    } else {
      e.target.innerText = "Select";
      setSelectedSlot(null);
    }
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
            id={index + "btn"}
            onClick={(e) =>
              availableSelectedDayTimeSlots.includes(timeSlot) &&
              handleClick(timeSlot, e)
            }
          >
            {!availableSelectedDayTimeSlots.includes(timeSlot)
              ? "booked"
              : "select"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
