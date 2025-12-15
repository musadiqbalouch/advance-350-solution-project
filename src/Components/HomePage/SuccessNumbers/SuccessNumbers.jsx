import React from "react";
import image from "../../../assets/SuccessSectionlogo1.png";

// import { SuccessRate } from "../../Constants/Data";
import { SuccessRate } from "../../Constants/Data";

const SuccessNumbers = () => {
  // laptop - sm;
  return (
    <div
      className="w-full   flex  items-center justify-center text-[#FFFFFF] container m-auto p-10  laptop-lg:p-5 laptop-lg:p5 desktop:m-auto 
    desktop:mt-10 laptop-lg:px-10  "
    >
      <div
        className="tablet:rounded-4xl bg-linear-[360deg] from-[#1B1C67]  to-[#0096E8] to-[188.17%] flex  flex-col 
      items-center justify-center s_phone:rounded-xl s_phone:py-3 m_phone:px-3  laptop-sm:px-0 laptop:py2   laptop-lg:w-full  "
      >
        <h2 className="   font-bold text-center py-3  s_phone:text-base tablet:text-xl  laptop-sm:text-xl laptop:text-2xl laptop-lg:text-4xl ">
          Our Success By The Numbers
        </h2>
        <div
          className=" items-center justify-between gap5 mt-2 s_phone:flex  s_phone:flex-col s_phone:gap-10 tablet:flex-row
         tablet:flex-wrap  tablet:justify-around laptop-sm:flex-nowrap laptop-sm:gap-1   laptop:gap-8  laptop:px-10   "
        >
          {SuccessRate.map((success, index) => (
            <div
              key={index}
              className=" flex flex-col items-center  laptop:gap-2    laptop-sm:mt-2 laptop-sm:w-47  laptop:p-1   "
            >
              <img
                className="h-10 w-10 object-cover s_phone:h-8 s_phone:w-8 laptop-sm:h-8 laptop-sm:w-8  laptop:h-10 laptop:w-10"
                src={success.image}
                alt=""
              />
              <h3 className="text-3xl  font-bold  s_phone:text-lg laptop:text-xl ">
                {success.Number}
              </h3>
              <p className=" normalfutura   laptop-lg:w-55 px3 text-center s_phone:text-sm s_phone:px-1 laptop-sm:text-xs  laptop:text-lg ">
                {success.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessNumbers;
