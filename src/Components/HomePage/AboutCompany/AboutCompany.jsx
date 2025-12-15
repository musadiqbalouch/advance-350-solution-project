import React from "react";
import AboutCompanyimage from "../../../assets/AboutCompany.png";
import { FaGripLines } from "react-icons/fa";
import CommanButton from "../../Comman/CommanButton";
// import { AboutOurCompany } from "../../Constants/Data";
import { AboutOurCompany } from "../../Constants/Data";

const AboutCompany = () => {
  return (
    <div className="flex items-center justify-center  gap-5  s_phone:flex-col s_phone:px-3 tablet:flex-row  tablet:p-10  laptop:gap-15 ">
      <div>
        <img
          className="object-cover h170 w170  s_phone:h-60  s_phone:w-60 tablet:h-80 tablet:w-80 laptop-sm:h-100 laptop-sm:w-100  laptop:h-120 laptop:w-110 laptop-lg:h-170 laptop-lg:w-170  "
          src={AboutCompanyimage}
          alt=""
        />
      </div>
      <div className="w150 flex items-start flex-col gap-2 ">
        <h2 className="flex text-[#1B1C67]  items-center gap-2  s_phone:text-xs laptop:text-lg">
          <FaGripLines className="text-2xl" /> About Our Company
        </h2>
        <h1 className="font-bold  s_phone:text-lg laptop:text-2xl laptop-lg:text-4xl ">
          Let Us Be Your Partners <br /> Preferred IT Partner
        </h1>
        <p className="my5 font-medium  leading-5 s_phone:text-xs s_phone:my-2 laptop:text-sm  laptop-lg:text-base ">
          At Advanced360 Solutions, your challenges become our <br />{" "}
          challenges. With a foundation built on experience and <br />{" "}
          integrity, we partner with you to respond to the change, to <br />{" "}
          deploy timely solutions, and elevate your business to the next level.{" "}
          <br />{" "}
        </p>
        <CommanButton
          className={
            "bg-[#1B1C67] mb-2 text-white   font-semibold rounded-md  s_phone:text-sm  s_phone:px-4 laptop:px-6 laptop-lg:px-7  laptop-lg:py-1  laptop-lg:text-lg "
          }
          text={"Read More"}
        />
        {AboutOurCompany.map((about, index) => (
          <div
            key={index}
            className="flex s_phone:w-70     items-start gap-2 my-2 phone:w-90 tablet:my-0  "
          >
            <h3 className=" text-xl text-[#1B1C67]">{about.checked}</h3>
            <p className=" ws90 text-xs   laptop:text-sm ">
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;
