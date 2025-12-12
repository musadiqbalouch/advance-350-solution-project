import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SuccessNumbers from "./SuccessNumbers/SuccessNumbers";
import AboutCompany from "./AboutCompany/AboutCompany";
import OurService from "./OurService/OurService";
import AdvanceSolution from "./AdvanceSolution/AdvanceSolution";
import TrustedPartners from "./TrustedPartners/TrustedPartners";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

const HomPage = () => {
  return (
    <div className="w-full ">
      {/* <Navbar /> */}
      <HeroSection />
      <SuccessNumbers />
      <AboutCompany />
      <OurService />
      <AdvanceSolution />
      {/* <TrustedPartners />
      <ContactUs />
      <Footer /> */}
    </div>
  );
};

export default HomPage;
