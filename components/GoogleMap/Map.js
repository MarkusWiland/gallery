import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyChAhnzXo8PCLjjz6eoSNWLS-zv8L5W0uA",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={2}
      center={{ lat: 52.520008, lng: 13.404954 }}
      mapContainerClassName="map-container"
    >
      {/*  <Marker position={{ lat: 52.520008, lng: 13.404954 }} />*/}
      <Marker
        position={{ lat: 23.424076, lng: 53.847818 }}
        style={{ width: "50px", height: "50px" }}
      />
    </GoogleMap>
  );
}
