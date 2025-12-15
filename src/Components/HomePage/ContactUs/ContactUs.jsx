import React from "react";
// import { Informations } from "../../Constants/Data";
import { Informations } from "../../Constants/dataa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className=" flex items-center justify-center s_phone:p-4 tablet:px-10    w-full  ">
      <div
        className="bg-linear-[360deg]  flex  items-center justify-center rounded-2xl  container m-auto gap 10  p6  from-[#1B1C67] 
       to-[#0096E8] to-[188.17%] text-white s_phone:flex-col s_phone:p-3 tablet:flex-row tablet:gap-10  laptop:px-10  "
      >
        <div className="  tablet:w-[40%] laptop-sm:w-[40%]  p-2 ">
          <h3 className=" s_phone:text-sm   laptop:text-base">
            We’re Here to Help You Share Your Story
          </h3>
          <h1 className="text-3xl font-bold  s_phone:text-lg laptop:text-3xl  laptop:w-65 ">
            Contact Us For Information On Our Services
          </h1>
          <p className="text-base my-8  s_phone:text-sm  ">
            Have questions or need more information about our program? Reach out
            to us, and we’ll be happy to assist. Let’s keep the conversation
            going and create something truly extraordinary together.
          </p>
          <div className=" w10 wfit flex  flex-col gap-2 ">
            {Informations.map((information, index) => (
              <div
                className="flex gap-5 items-center border-2 rounded-xl py-3  px-4  laptop:w-100 "
                key={index}
              >
                <h3 className="text-xl s_phone:text-xs laptop:text-xl ">
                  {information.logo}
                </h3>
                <h3 className=" s_phone:text-xs laptop:text-base ">
                  {information.contact}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex py-4 text-3xl gap-2  s_phone:text-xl">
            <FaFacebook />
            <AiFillInstagram />
            <FaTwitter />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
