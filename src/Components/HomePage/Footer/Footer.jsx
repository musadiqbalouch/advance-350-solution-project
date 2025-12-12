import React from "react";
import advanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import Input from "../../Comman/Input";
import CommanButton from "../../Comman/CommanButton";
import { foorterContent1 } from "../../Constants/Data";
console.log("🚀 ~ foorterContent1:", foorterContent1);
// import { foorterContent2 } from "../../Constants/Data";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center py-8 gap-20 mt-10">
        <div className="w-[30%] ">
          <img src={advanceSolutionLogo} alt="" />
          <p className="text-[#1B1C67] py-5 font-normal">
            Sign up for the Advance 360 Solutions newsletter <br /> for updates:
          </p>
          <Input
            type={"email"}
            placeholder={"Enter Your Email"}
            className={
              "outline-none border border-[#1B1C67] w-full rounded-md py-1 px-1"
            }
          />
          <CommanButton
            text={"Let’s Do It"}
            className={
              "bg-[#1B1C67] text-white w-full my-4 py-2 text-base font-bold rounded-md"
            }
          />
        </div>

        <div>
          <div className="w[60%] text-lg  font-normal flex  justify-between px-2">
            {foorterContent1.map((footer, index) => (
              <div key={index} className=" flex flex-col gap-4">
                <h2 className="text-[#1B1C67]">{footer.title}</h2>
                {footer.array.map((txt) => (
                  <h4 className="flex gap-2 items-center text-sm  w-50  ">
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
        <p className="text-white text-base bg-[#1B1C67] py-3">
          Ⓒ All Rights Reserved 2024{" "}
          <span className="font-bold">-Advance 360 Solutions</span>. Powered by
          <span className="font-bold">Apex Web Studios</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
