import React from "react";

const CommanButton = ({ className, text }) => {
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
};

export default CommanButton;
