import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { containerStyle, center, styles} from '../FindUs/gMapStyles';
import "./findUs.scss";


const FindUs = () => {
  return (
    <section className="findUs">
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
                  styles: styles
                }}
              >
                <MarkerF position={center} />
              </GoogleMap>
            </LoadScript>

    </section>
  );
};

export default FindUs;
