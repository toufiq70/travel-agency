// @ts-nocheck
import React, { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // header context
  const headersLink = [
    {
      id: "1",
      name: "Home",
      url: "/",
    },

    {
      id: "3",
      name: "Tour List",
      url: "/tour-list",
    },
    
    {
      id: "5",
      name: "Destinations",
      url: "/destinations",
    },
    {
      id: "6",
      name: "Date & Pricing",
      url: "/date-pricing",
    },
    {
      id: "7",
      name: "Blog",
      url: "/blog",
    },
  ];

  const slides = [
    {
      id: "1",
      sliderUrl: "https://wallpaperaccess.com/full/7464042.jpg",
      caption: "Find Next Place to Visit",
      description: "Discover amazing places at exclusives deals",
    },
    {
      id: "12",
      sliderUrl: "https://wallpaperaccess.com/full/354966.jpg",
      caption: "Find Next Place to Visit",
      description: "Discover amazing places at exclusives deals",
    },
    {
      id: "13",
      sliderUrl: "https://wallpaper.dog/large/5439620.jpg",
      caption: "Find Next Place to Visit",
      description: "Discover amazing places at exclusives deals",
    },
    {
      id: "14",
      sliderUrl:
        "https://c4.wallpaperflare.com/wallpaper/423/247/680/waterfall-ban-gioc-detian-falls-ban-gioc-detian-falls-body-of-water-wallpaper-preview.jpg",
      caption: "Find Next Place to Visit",
      description: "Discover amazing places at exclusives deals",
    },
  ];

  // destinations
  const destinationsData = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Cox'bazar", label: "Cox'bazar" },
    { value: "Saintmartin", label: "Saintmartin " },
  ];

  // durations
  const durationsData = [
    { value: "2-3 days", label: "2-3 days" },
    { value: "one days", label: "one days" },
    { value: "4-7 days ", label: "4-7 days " },
  ];

  // tour forecast data
  const tourForeCastData = [
    {
      id: "1",
      title: "Best service guarantee",
      desInfo: "Price and room service within 24hrs of order confirmations",
    },
    {
      id: "2",
      title: "Top notch support",
      desInfo: "We are here to help before, during and even after your trip",
    },
    {
      id: "3",
      title: "800 + Destinations",
      desInfo: "Our expert team handpicked all destinations in this site",
    },
  ];

  const authInfo = {
    headersLink,
    slides,
    destinationsData,
    durationsData,
    tourForeCastData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
