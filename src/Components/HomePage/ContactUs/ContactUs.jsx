import React from "react";
import { Informations } from "../../Constants/Data";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import CommanButton from "../../Comman/CommanButton";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className=" flex items-center justify-center  w-full">
      <div className="bg-linear-[360deg] container m-auto gap-10  w-[84%] p-6  from-[#1B1C67]  to-[#0096E8] to-[188.17%] text-white flex  items-center justify-center rounded-2xl">
        <div className=" w-[40%]  p-2 ">
          <h3>We’re Here to Help You Share Your Story</h3>
          <h1 className="text-3xl font-bold">
            Contact Us For <br /> Information On <br /> Our Services
          </h1>
          <p className="text-base my-8">
            Have questions or need more information about our program? Reach out
            to us, and we’ll be happy to assist. Let’s keep the conversation
            going and create something truly extraordinary together.
          </p>
          <div className=" flex  flex-col gap-2 ">
            {Informations.map((information, index) => (
              <div
                className="flex gap-5 items-center border-2 rounded-xl py-3  px-4"
                key={index}
              >
                <h3 className="text-xl ">{information.logo}</h3>
                <h3 className="w-70  ">{information.contact}</h3>
              </div>
            ))}
          </div>
          <div className="flex py-4 text-3xl gap-2">
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
