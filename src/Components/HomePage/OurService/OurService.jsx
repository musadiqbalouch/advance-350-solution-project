import React from "react";
import OurServiceBackgroundImage from "../../../assets/OurServiceBackgroundImage.png";
import TRANSFORMATIONACCELERATOR from "../../../assets/TRANSFORMATIONACCELERATOR.png";
import CommanButton from "../../Comman/CommanButton";
import { ServiceCard } from "../../Constants/Data";

const OurService = () => {
  return (
    <div
      className="flex flex-col p-10 items-center justify-center"
      style={{
        backgroundImage: `url(${OurServiceBackgroundImage})`, // This is correct React syntax
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[#0096E8] my-2 s_phone:text-xl laptop-sm:text-2xl laptop-lg:text-4xl ">
          Our Services
        </h2>
        <p className="font-medium  s_phone:text-sm s_phone:text-center laptop-sm:text-lg  laptop-sm:px-6   laptop:text-sm laptop:w-205  laptop-lg:w-230 laptop-lg:text-base  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="flex  gap-3  items-center  justifycenter text-center rounded-3xl py-4 mt-5 overflow-auto w-full   ">
        <div className=" flex gap-5 shrink-0   ">
          {ServiceCard.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col w-60 h50 gap-4  items-center justify-center py-8 rounded-2xl s_phone:w-50 laptop-lg:w-60  "
            >
              <img className="h-18 w-18 object-cover  " src={service.image} />
              <h2 className="w-40  s_phone:text-xs  laptop:text-base">
                {service.title}
              </h2>
              <p>{service.btn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
