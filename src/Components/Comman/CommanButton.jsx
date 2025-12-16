import React from "react";

const CommanButton = ({
  className,
  text,
  onClick,
  onSubmit,
  type = "button",
  disabled = false,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${className}  bg-[#1B1C67] text-white px-5 py-2  font-bold rounded-md border tablet:text-xs laptop:text-sm  s_phone:py-1 s_phone:text-sm  s_phone:px-2 cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
};

export default CommanButton;
