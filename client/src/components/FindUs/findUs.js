import React, { useEffect } from "react";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyle, center, styles } from "./gMapStyles";
import { useAppContext } from "../../providers/appProvider";

import Calendar from "./Calendar/calendar";

import CloseIcon from "@mui/icons-material/Close";

import "./findUs.scss";

const FindUs = () => {
  const {
    data,
    value,
    setValue,
    setBookings,
    setDisplayTimeSlots,
    displayTimeSlots,
    setSuccessMessage,
    successMessage
  } = useAppContext();

  const URL_booking = "http://localhost:8080/booking";

  useEffect(() => {
    try {
      fetch(URL_booking + "/getAll")
      .then((response) => response.json())
      .then((responseData) => setBookings(responseData));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <section className="findUs" id="book">
      {!displayTimeSlots && successMessage && (
        <div className="success-message">
          Your appointment has been successfully booked.
          <CloseIcon
            sx={{
              color: "white",
              cursor: "pointer",
              width: "30px",
            }}
            onClick={() => setSuccessMessage(false)}
          />
        </div>
      )}
      <div className="wrapper">
        <div className="left-section">
          <div className="left-title">{data.findUs.a}</div>
          <div className="left-sub-title">{data.findUs.b}</div>
          <div className="left-text">
            <p>234 Carlson St, Oshawa, P2R 6T4</p>
            <p>{data.findUs.c}: +1 787 395 9879</p>
            <p>Email: bianchi@barbershop.com</p>
          </div>
          <Calendar
            value={value}
            onChange={setValue}
            onClick={setDisplayTimeSlots}
          />
        </div>
        <div className="right-section">
          <LoadScript googleMapsApiKey="AIzaSyAW16NdR4wD3pFTCw2Z-iEfFZxGuwcOwmg">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: styles,
              }}
            >
              <MarkerF position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
