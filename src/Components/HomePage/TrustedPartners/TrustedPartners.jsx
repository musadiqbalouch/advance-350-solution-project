import React from "react";
// import { TrustedPartnersLogo } from "../../Constants/Data";
import { TrustedPartnersLogo } from "../../Constants/dataa";
const TrustedPartners = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-10  s_phone:p-2 tablet:py-10 ">
      <h2 className="text-4xl font-bold text-[#1B1C67]  s_phone:text-base tablet:text-xl  laptop:text-3xl  ">
        Our Trusted Partners
      </h2>
      <div className="flex items-center gap- s_phone:gap-5  tablet:gap-13 laptop:gap-17 laptop-lg:gap-20 ">
        {TrustedPartnersLogo.map((logo, index) => (
          <div key={index}>
            <img
              className=" h-9 object-cover w-full s_phone:h-3  m_phone:h-4 phone:h-5  tablet:h-6  laptop:h-9"
              src={logo.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartners;
