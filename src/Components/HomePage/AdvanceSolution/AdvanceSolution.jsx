import React from "react";
import CommanButton from "../../Comman/CommanButton";
import advancesolutionimage from "../../../assets/advancesolutionimage.png";

const AdvanceSolution = () => {
  return (
    <div
      id="advancesolution"
      className=" w-full   flex  items-center justify-center p-10  s_phone:flex-col s_phone:p3 s_phone:gap-5 laptop-sm:px-8 laptop:px-15  tablet:flex-row container m-auto "
    >
      <div className=" tablet:w-[40%] ">
        <p className=" font-bold text-[#0096E8]  s_phone:text-xl  laptop-sm:text-2xl laptop:text-3xl   laptop-lg:text-4xl">
          Advanced solutions for advanced problems.{" "}
          <span className="text-[#1B1C67]">
            Schedule a free consultation with Advanced360 Solutions today.
          </span>
        </p>
        <CommanButton text={"Contact us "} className={"px-7! my-2!"} />
      </div>
      <div className=" tablet:w-[60%] laptop-lg:w-[50%]">
        <img
          className=" object-cover  s_phone:h-50 s_phone:w-60 tablet:h-80 tablet:w-100 laptop-sm:h-85 laptop-sm:w-110 laptop:h-110 
           laptop:w-135  laptop-lg:h-110  laptop-lg:w-130 "
          src={advancesolutionimage}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdvanceSolution;
