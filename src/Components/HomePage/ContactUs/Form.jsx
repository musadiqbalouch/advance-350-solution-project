import React from "react";
import CommanButton from "../../Comman/CommanButton";
import { FaLocationArrow } from "react-icons/fa6";
import Input from "../../Comman/Input";

const Form = () => {
  return (
    <div className="bg-white text-black placeholder:text-black   tablet:w-[60%]  p-8 rounded-2xl s_phone:px-5  m_phone:px-10">
      <h1 className="my-7 font-bold text-[#1B1C67]  s_phone:text-xl  laptop:text-4xl ">
        Contact Us{" "}
      </h1>
      <form className="flex flex-col gap-7 s_phone:gap-4 laptop:gap-10   ">
        <Input
          className={
            "border-b-2 border-[#1B1C67] py-1 outline-none  s_phone:placeholder:text-sm  laptop:placeholder:text-base"
          }
          placeholder={"Your Name "}
          type={"text"}
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-1 outline-none s_phone:placeholder:text-sm  laptop:placeholder:text-base"
          type="text"
          placeholder="Phone No "
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-1 outline-none  s_phone:placeholder:text-sm  laptop:placeholder:text-base"
          type="text"
          placeholder="You Email "
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-3 h-25 outline-none  s_phone:placeholder:text-sm  laptop:placeholder:text-base"
          type="textarea"
          placeholder="Your Message "
        ></Input>
        {/* <span
          className="flex items-center text-base  gap-2  justify-center text-white rounded-lg 
          s_phone:h-10 s_phone:text-xs bg-[#1B1C67]  laptop:text-base   laptop:h-15  laptop:w-55"
        >
          <FaLocationArrow />
          <CommanButton
            text={"Send message"}
            className={" text-white font-bold   "}
          />
        </span> */}
      </form>
    </div>
  );
};

export default Form;
