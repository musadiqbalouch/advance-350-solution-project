import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className=" inset-0 h   fixed flex  justify-center items-center bg-black/40 backdrop-blur-sm transition-opacity duration-300  ">
      <div>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
