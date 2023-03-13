// @ts-nocheck
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/auth/firbase.init";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
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

  // authentication start

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // log out
  const logOut = () => {
    return signOut(auth);
  }

  // email verification 
  const emailVerify = (userEmail) => {
    setLoading(true);
    return sendEmailVerification(userEmail)
  }

  // password reset email
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }


  // login with google
  const googleProvider = new GoogleAuthProvider;

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  // login with facebook
  const facebookProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }


  // display user Name profile
  const updateUserProfile = (profile) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, profile)

  }


  // set observer
useEffect( () => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log("current user", currentUser);
    
    
      setUser(currentUser);
    

    setLoading(false);
  })
  return () => {
    unSubscribe()
  }
},[])


  const authInfo = {
    headersLink,
    slides,
    updateUserProfile,
    destinationsData,
    durationsData,
    tourForeCastData,
    createUser,
    logIn,
    logOut,
    emailVerify,
    forgotPassword,
    googleSignIn,
    facebookProvider,
    user,
    setUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
