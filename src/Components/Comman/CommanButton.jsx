import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa6";

const CommanButton = ({
  className,
  text,
  onClick,
  onSubmit,
  type = "button",
  disabled = false,
  loading,
  arrow = false,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${className}bg-[#1B1C67] text-white px-5 flex items-center justify-center gap-2 py-2 font-bold rounded-md border tablet:text-xs laptop:text-sm s_phone:py-1 s_phone:text-xs s_phone:px-4 cursor-pointer`}
      >
        {arrow ? <FaLocationArrow className={`text-white `} /> : ""}
        {text}
        {loading ? <AiOutlineLoading className={`text-xl animate-spin`} /> : ""}
      </button>
    </div>
  );
};

export default CommanButton;
