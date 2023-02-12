import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyle, center, time, styles} from './gMapStyles';
import moment from "moment";
import Calendar from "./calendar";

import "./book.scss";



const Book = () => {
  const [value, setValue] = useState(moment());
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
          <Calendar
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="right-section">
            <LoadScript googleMapsApiKey="AIzaSyAW16NdR4wD3pFTCw2Z-iEfFZxGuwcOwmg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                  styles: styles
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

export default Book;
