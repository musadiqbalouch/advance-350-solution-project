import React from "react";

const Input = ({ className, placeholder, type = "text" }) => {
  if (type === "textarea") {
    return <textarea className={className} placeholder={placeholder} />;
  }

  return <input type={type} className={className} placeholder={placeholder} />;
};

export default Input;
