import React, { useState } from "react";
import CommanButton from "../../Comman/CommanButton";
import AdvanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import { links } from "../../Constants/Data";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("🚀 ~ Navbar ~ menuOpen:", menuOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full  fixed top-0 z-10 ">
      <nav className="flex  items-center   h-20 justify-between px-17 bg-[#FEFEFE] py-1 w-full  container m-auto ">
        <div>
          <img
            className="object-contain h-15   "
            src={AdvanceSolutionLogo}
            alt=""
          />
        </div>

        <div className="flex items-center justify-around gap-8  font-medium     ">
          {/* <GiHamburgerMenu  /> */}
          {links.map((link, index) => (
            <a
              key={index}
              className="flex text-sm  items-center justify-center"
            >
              {link.title}
              <span className="text-3xl ">{link.dropdown}</span>
            </a>
          ))}
        </div>
        <div>
          <CommanButton
            className={
              "bg-[#1B1C67] text-white px-3 py-1 text-sm font-bold rounded-md border "
            }
            text={"Contact Us"}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
