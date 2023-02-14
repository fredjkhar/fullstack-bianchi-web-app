import React, { useState } from "react";
import Booking from "./Booking/booking";
import { useAppContext } from "../../providers/appProvider";
import validateBookingForm from "./Booking/validateBooking";

import CloseIcon from "@mui/icons-material/Close";

import "./book.scss";

const Book = () => {
  const {
    value,
    bookings,
    displayTimeSlots,
    setDisplayTimeSlots,
    setSuccessMessage,
  } = useAppContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [time, setTime] = useState("");

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  const URL_booking =
    "https://ec2-3-144-149-118.us-east-2.compute.amazonaws.com:8080//booking";
  const handleClick = (e) => {
    e.preventDefault();
    alert && setAlert(false);
    const date = value.clone().format("YYYY-MM-DD");
    const booking = {
      date,
      name,
      phone,
      time,
    };

    const result = validateBookingForm(booking, checked);
    if (result) {
      setAlertMessage(result);
      setAlert(true);
    } else {
      fetch(URL_booking + "/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      }).then((res) => {
        if (res.status === 200 && res.ok === true) {
          setSuccessMessage(true);
          setDisplayTimeSlots(false);
        }
      });
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
              <div className="booking-alert">
                {alertMessage}
                <CloseIcon
                  sx={{
                    color: "white",
                    cursor: "pointer",
                    width: "30px",
                  }}
                  onClick={() => setAlert(false)}
                />
              </div>
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
                  className="checkbox"
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
