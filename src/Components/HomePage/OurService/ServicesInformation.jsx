import React from "react";
import { MdCancelPresentation } from "react-icons/md";

const ServicesInformation = ({ setShowModal, title }) => {
  return (
    <div className="bg-white flex  flex-col items-center  w-180 gap-3 p-5 rounded-2xl">
      <MdCancelPresentation
        className="text-3xl text-black self-end   cursor-pointer    "
        onClick={() => setShowModal(false)}
      />

      <h1 className="text-[#0096E8] text-xl font-semibold">{title}</h1>
      <p className="text-center font-normal ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        mollitia incidunt commodi quia libero labore corrupti, blanditiis eaque
        repellendus itaque magni, quas nostrum, maiores velit voluptatum
        consectetur. Dignissimos, explicabo sapiente!
      </p>
    </div>
  );
};

export default ServicesInformation;
