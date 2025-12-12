import React from "react";
import CommanButton from "../../Comman/CommanButton";
import HeroSectionimgae from "../../../assets/HeroSection.png";

const HeroSection = () => {
  // s_phone;
  return (
    <div className="flex  items-center mt-20 w-full container m-auto s_phone:flex-col s_phone:px-3 tablet:flex-row tablet:relative tablet:px-10 laptop-sm:p-0 ">
      <div className=" flex flex-col    s_phone:w-full tablet:absolute  laptop:left-12  laptop:w-[40%]   ">
        <h3 className="text-[#1B1C67] s_phone:text-sm laptop:text-base    ">
          Driving Results for Commercial and Federal Success
        </h3>
        <h1
          className="  font-extrabold  leading-15 text-[#1B1C67] s_phone:text-xl s_phone:w-fit 
         s_phone:leading-7  tablet:text-3xl tablet:w-80  tablet:leading-10 laptop:text-5xl  laptop:w80   laptop:leading-15  _4k:text-6xl "
        >
          Transforming <br />
          <span className="text-[#0096E8]">Technology & Strategy</span> for
          Tomorrow
        </h1>
        <p className="  my-2 s_phone:text-xs  tablet:w-80  laptop:w-125 laptop:text-base  ">
          Explore our full range of consulting services designed to enhance{" "}
          operational excellence, improve compliance, and drive sustainable
          growth
        </p>
        <CommanButton
          className={
            "bg-[#1B1C67] text-white px-4   py-2 text-base font-semibold rounded-md  s_phone:px-2 s_phone:text-xs  s_phone:py-1  laptop:px-4 laptop:py-2 laptop:text-sm "
          }
          text={"Explore Now"}
        />
      </div>
      <div className=" w-full   flex  tablet:justify-end  s_phone:h-60 m_phone:h-70 tablet:h-80 tablet:mt-8  laptop:h-90 laptop:mt-20 laptop-lg:h-125 laptop-lg:mt-8  ">
        <img className="object-cover     " src={HeroSectionimgae} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
