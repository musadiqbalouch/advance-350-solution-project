import React, { useState } from "react";
import CommanButton from "../../Comman/CommanButton";
import AdvanceSolutionLogo from "../../../assets/advance-360-solotions-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../../Constants/data";
import { href, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const scroolBar = () => {
    console.log(location);

    if (location.pathname === "/contact") {
      navigate("/");
      setMenuOpen(false);
    } else {
      navigate("/");
      setMenuOpen(false);
    }
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
            <div
              key={link.id}
              className="flex flex-col h-5   "
              onMouseEnter={() => setDrop(index)}
              onMouseLeave={() => setDrop(null)}
            >
              <a
                href={link.ref}
                onClick={scroolBar}
                key={index}
                className="flex   text-sm  tablet:h-5   items-center justify-center  tablet:text-xs laptop:text-sm "
              >
                {link.title}
                <span className="text-3xl ">
                  {drop === index ? link.dropup : link.dropdown}
                </span>
              </a>
              {link.items && (
                <div
                  className={`flex  flex-col  bg-[#FEFEFE]  rounded-lg items-center  cursor-pointer text-sm gap-1 p-1 ${drop === index ? "border   " : ""}`}
                >
                  {link?.items?.map((item) => (
                    <div key={item.id} className="">
                      <a className={`${drop === index ? "flex " : "hidden"}`}>
                        {item?.item}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link to={"/Contact"} className="s_phone:hidden tablet:block">
          <CommanButton text={"Contact Us"} />
        </Link>
      </nav>
      {/* navbar when screen size is on smaller then table  */}
      <div className="bg-[#FEFEFE] py-2 ">
        <div className=" w-full text-xl flex items-center justify-between px-3  tablet:hidden">
          <GiHamburgerMenu
            onClick={toggleMenu}
            className={`text-2xl  ${menuOpen ? "text-[#1B1C67]" : "text-shadow-black"}`}
          />
          <img className="h-10 object-cover" src={AdvanceSolutionLogo} alt="" />
        </div>
        {menuOpen && (
          <div className=" ease-in-out duration-50 h-fit w-40 justify-around px-4 gap-2 flex flex-col tablet:hidden">
            {links.map((link, index) => (
              <div key={link.id} className="">
                <div className="flex items-center ">
                  <a
                    href={link.ref}
                    onClick={scroolBar}
                    key={index}
                    className="text-sm flex "
                  >
                    {link.title}
                  </a>
                  <span
                    className="text-xl "
                    onClick={() =>
                      drop === null ? setDrop(index) : setDrop(null)
                    }
                  >
                    {drop === index ? link.dropup : link.dropdown}
                  </span>
                </div>
                {link.items && (
                  <div
                    className={`flex  flex-col  bg-[#FEFEFE]  rounded-lg itemscenter  cursor-pointer text-sm  ${drop === index ? " border  s_phone:w-20  s_phone:gap-1  s_phone:px-1  s_phone:my-1 " : ""}`}
                  >
                    {link?.items?.map((item) => (
                      <div key={item.id} className="">
                        <a className={`${drop === index ? "flex " : "hidden"}`}>
                          {item?.item}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to={"/Contact"}
              onClick={() => setMenuOpen(false)}
              className=""
            >
              <CommanButton text={"Contact Us"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
