import React from "react";

const Input = ({
  className,
  placeholder,
  type = "text",
  value,
  disabled,
  onChange,
  id,
  required,
  min,
  max,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        className={` cursor-pointer border-b-2 border-[#1B1C67] py-3 h-25 outline-none  s_phone:placeholder:text-sm  laptop:placeholder:text-base `}
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        id={id}
        required={required}
        min={min}
        max={max}
      />
    );
  }

  return (
    <input
      className={` ${className} cursor-pointer border-b-2 border-[#1B1C67] py-1 outline-none  s_phone:placeholder:text-sm  laptop:placeholder:text-base`}
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      id={id}
      required={required}
      min={min}
      max={max}
    />
  );
};

export default Input;
