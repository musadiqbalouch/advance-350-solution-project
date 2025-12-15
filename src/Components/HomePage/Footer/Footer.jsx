import React from "react";
import advanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import Input from "../../Comman/Input";
import CommanButton from "../../Comman/CommanButton";
import { foorterContent1 } from "../../Constants/Data";

const Footer = () => {
  return (
    <div className="w-full  ">
      <div
        className="w-full flex items-center justify-center   gap-20 mt-10 s_phone:flex-col s_phone:px-5 
       tablet:flex-row  laptop:py-8 laptop:px-15"
      >
        <div className=" tablet:w-[40%] laptop:w-[30%]  ">
          <img
            src={advanceSolutionLogo}
            className="s_phone:h-10  laptop:h-15"
            alt=""
          />
          <p className="text-[#1B1C67] py-5 font-normal">
            Sign up for the Advance 360 Solutions newsletter for updates:
          </p>
          <Input
            type={"email"}
            placeholder={"Enter Your Email"}
            className={
              "outline-none border border-[#1B1C67] w-full rounded-md py-1 px-1 s_phone:placeholder:text-sm"
            }
          />
          <CommanButton
            text={"Let’s Do It"}
            className={
              "bg-[#1B1C67] text-white w-full my-4 py-2 text-base font-bold rounded-md  s_phone:text-sm "
            }
          />
        </div>

        <div className=" tablet:w-[60%] ">
          <div
            className=" text-lg   font-normal flex   justify-between px2  s_phone:flex-col s_phone:py-5  s_phone:gap-5 
           tablet:flex-row   "
          >
            {foorterContent1.map((footer, index) => (
              <div
                key={index}
                className=" flex flex-col  s_phone:gap-1   tablet:w-100 tablet:gap-3   "
              >
                <h2 className="text-[#1B1C67] tablet:text-base laptop:text-lg">
                  {footer.title}
                </h2>
                {footer.array.map((txt, index) => (
                  <h4
                    key={index}
                    className="flex gap-2 items-center text-sm  w50 tablet:text-xs laptop:text-sm "
                  >
                    {txt.logo}
                    {txt.text}
                  </h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-amber-300">
        <p className="text-white text-base bg-[#1B1C67] py-3  s_phone:text-sm">
          Ⓒ All Rights Reserved 2024{" "}
          <span className="font-bold">-Advance 360 Solutions</span>. Powered by
          <span className="font-bold">Apex Web Studios</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
