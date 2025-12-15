import React, { useState } from "react";
import CommanButton from "../../Comman/CommanButton";
import AdvanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../../Constants/dataa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("🚀 ~ Navbar ~ menuOpen:", menuOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full  fixed top-0 z-10 ">
      <nav
        className="flex  items-center  h-20 justify-between  bg-[#FEFEFE] py-1 w-full  container m-auto s_phone:flex-col
       s_phone:h-fit s_phone:items-start s_phone:px-2 tablet:items-center tablet:flex-row tablet:px-10 laptop-sm:px-1 laptop:px-10
        laptop-lg:px-10  "
      >
        <div className=" s_phone:hidden  tablet:block">
          <img
            className="object-contain h-15 tablet:h-10 laptop:h-13   "
            src={AdvanceSolutionLogo}
            alt=""
          />
        </div>
        {/* navbar when screen size is on table or greater then tablet */}
        <div
          className="flex items-center justify-around  font-medium s_phone:hidden  tablet:flex tablet:gap-3 laptop:gap-5 
        laptop-lg:gap-10  "
        >
          {links.map((link, index) => (
            <a
              key={index}
              className="flex  text-sm   items-center justify-center  tablet:text-xs laptop:text-sm "
            >
              {link.title}
              <span className="text-3xl ">{link.dropdown}</span>
            </a>
          ))}
        </div>
        {/* navbar when screen size is on smaller then table  */}

        <div className="  s_phone:hidden tablet:block">
          <CommanButton
            className={
              "bg-[#1B1C67] text-white px-3 py-1  font-bold rounded-md border tablet:text-xs laptop:text-sm "
            }
            text={"Contact Us"}
          />
        </div>
      </nav>
      <div className="bg-[#FEFEFE]  ">
        <div className=" w-full text-xl flex items-center justify-between px-3  tablet:hidden">
          <GiHamburgerMenu onClick={toggleMenu} className=" text-2xl  " />
          <img className="h-10 object-cover" src={AdvanceSolutionLogo} alt="" />
        </div>
        {menuOpen && (
          <div className=" ease-in-out duration-500   h-60 w-40 justify-around px-1 flex flex-col gaps2    tablet:hidden">
            {links.map((link, index) => (
              <a key={index} className="text-sm flex    ">
                {link.title}
                <span>{link.dropdown}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
