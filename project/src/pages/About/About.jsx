import React from "react";
import "./About.css";
import AboutUs from "./cardsAboutUs/cardsAboutUs";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function About() {
  return (
    <>
    <Navbar/>
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
