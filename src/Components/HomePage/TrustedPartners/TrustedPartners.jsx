import React from "react";
import { TrustedPartnersLogo } from "../../Constants/Data";
const TrustedPartners = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-10">
      <h2 className="text-4xl font-bold text-[#1B1C67]">
        Our Trusted Partners
      </h2>
      <div className="flex items-center gap-20 ">
        {TrustedPartnersLogo.map((logo) => (
          <div>
            <img className="w40 h-9 object-cover" src={logo.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
