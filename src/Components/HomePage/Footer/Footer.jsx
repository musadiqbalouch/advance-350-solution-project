import React, { useState } from "react";
import advanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import Input from "../../Comman/Input";
import CommanButton from "../../Comman/CommanButton";
import { foorterContent1 } from "../../Constants/dataa";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const signUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("email has been submitted");
    }, 1000);
  };
  return (
    <div className="w-full   ">
      <div
        className="w-full  container m-auto  flex items-center justify-center   gap-20 mt-10 s_phone:flex-col s_phone:px-5 
       tablet:flex-row  laptop:py-8 laptop:px-15 laptop-lg:px-0"
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
            className={"  border pl-2 w-full rounded-sm "}
          />
          <CommanButton
            onClick={signUp}
            text={"Let’s Do It"}
            className={"w-full my-2 "}
            loading={loading}
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
                  <a
                    key={index}
                    className="flex gap-2 items-center text-sm  w50 tablet:text-xs laptop:text-sm "
                  >
                    {txt.logo}
                    {txt.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-amber-300">
        <p className="text-white text-base bg-[#1B1C67] py-3  s_phone:text-sm">
          Ⓒ All Rights Reserved 2024{" "}
          <span className="font-semibold">-Advance 360 Solutions</span>. Powered
          by
          <a href="https://apexwebstudios.net/" className="font-bold ml-1">
            Apex Web Studios
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
