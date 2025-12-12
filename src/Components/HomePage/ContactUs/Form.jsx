import React from "react";
import CommanButton from "../../Comman/CommanButton";
import { FaLocationArrow } from "react-icons/fa6";
import Input from "../../Comman/Input";

const Form = () => {
  return (
    <div className="bg-white text-black placeholder:text-black  w-[60%]  p-8 rounded-2xl">
      <h1 className="text-4xl my-7 font-bold text-[#1B1C67]">Contact Us </h1>
      <form className="flex flex-col gap-7 ">
        <Input
          className={"border-b-2 border-[#1B1C67] py-1 outline-none"}
          placeholder={"Your Name "}
          type={"text"}
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-1 outline-none"
          type="text"
          placeholder="Phone No "
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-1 outline-none"
          type="text"
          placeholder="You Email "
        />
        <Input
          className="border-b-2 border-[#1B1C67] py-3 h-25 outline-none"
          type="textarea"
          placeholder="Your Message "
        ></Input>
        <span className="flex items-center text-base w-55 h-15 gap-2  justify-center text-white rounded-lg  bg-[#1B1C67]">
          <FaLocationArrow />
          <CommanButton
            text={"Send message"}
            className={" text-white font-bold "}
          />
        </span>
      </form>
    </div>
  );
};

export default Form;
