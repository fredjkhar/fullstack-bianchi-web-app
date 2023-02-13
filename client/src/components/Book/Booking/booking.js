import React, { useEffect, useState } from "react";

import getAvailableTimeSlots, { availableTimeSlots } from "./AvailableBookings";

const Booking = ({ bookings, value }) => {
  const [availableSelectedDayTimeSlots, setAvailableSelectedDayTimeSlots] =
    useState([]);

  useEffect(() => {
    getAvailableTimeSlots(value, bookings, setAvailableSelectedDayTimeSlots);
  }, [value, bookings]);

  return (
    <div className="time-rows">
      {availableSelectedDayTimeSlots.map((timeSlot) => (
        <div className="right-row">
          <div
            className={"" + availableTimeSlots.includes(timeSlot) && " booked"}
          >
            {timeSlot.length === 8
              ? timeSlot.substring(0, 5)
              : timeSlot.substring(0, 4)}
          </div>
          <div className="right-button">Book</div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
