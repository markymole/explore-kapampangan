"use client";

import React, { useMemo } from "react";
import {
  GoogleMap,
  MarkerF,
  Polygon,
  useLoadScript,
} from "@react-google-maps/api";

import { mapOptionsWhite } from "./Map.styles";
import { twMerge } from "tailwind-merge";
import { towns } from "../Hero/HeroMap/HeroMap.data";

interface MapProps {
  posts?: any;
  selectedTown?: string;
  className?: string;
}

const Map = ({ posts, selectedTown = "Pampanga", className }: MapProps) => {
  const center = useMemo(() => ({ lat: 15.133964, lng: 120.591027 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
  });

  const mapStyle = {
    width: "100%",
    height: "100%",
  };

  if (!isLoaded) {
    return <div>Loading ...</div>;
  }

  const iframeSrc = towns.filter((town) => town.name === selectedTown);

  return (
    <div className={twMerge("w-full", className || "h-[30rem]")}>
      {/* <GoogleMap
        zoom={12}
        center={center}
        mapContainerStyle={mapStyle}
        options={mapOptionsWhite}
      ></GoogleMap> */}
      <iframe
        src={
          iframeSrc[0]?.iframe ||
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246618.9970788841!2d120.49236314359099!3d15.024766620868215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f4848d776319%3A0x55a57880b7da26f8!2sPampanga!5e0!3m2!1sen!2sph!4v1710342164888!5m2!1sen!2sph"
        }
        width="100%"
        height="100%"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
