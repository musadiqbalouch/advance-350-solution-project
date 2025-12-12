import { RiArrowDropDownLine } from "react-icons/ri";

// navbar section data
export const links = [
  {
    title: "Home",
  },
  {
    title: "Services",
    dropdown: <RiArrowDropDownLine />,
  },
  {
    title: "Government",
    dropdown: <RiArrowDropDownLine />,
  },
  {
    title: "Case Studies",
    dropdown: <RiArrowDropDownLine />,
  },
  {
    title: "About A360",
    dropdown: <RiArrowDropDownLine />,
  },
];

import SuccessSectionlogo1 from "../../assets/SuccessSectionlogo1.png";
import SuccessSectionlogo2 from "../../assets/SuccessSectionlogo2.png";
import SuccessSectionlogo3 from "../../assets/SuccessSectionlogo3.png";
import SuccessSectionlogo4 from "../../assets/SuccessSectionlogo4.png";

export const SuccessRate = [
  {
    image: SuccessSectionlogo1,
    Number: "$1000,000,000",
    description: "5 Year Financial Budget Models Developed",
  },
  {
    image: SuccessSectionlogo2,
    Number: "2",
    description: "IPO Listings NYSE & NASDAQ ​  ",
  },
  {
    image: SuccessSectionlogo3,
    Number: "$60,000,000",
    description: "Digital Transformation Projects Delivered In 1% of Budget​",
  },
  {
    image: SuccessSectionlogo4,
    Number: "7+",
    description: "U.S. Patents​",
  },
];

// data for AboutCompany
import { CiCircleCheck } from "react-icons/ci";
export const AboutOurCompany = [
  {
    checked: <CiCircleCheck />,
    description:
      "We carefully evaluate to ensure there is a real and meaningful connection in each partner relationship.",
  },
  {
    checked: <CiCircleCheck />,
    description:
      "We ensure there is a cultural alignment, their character and business practices must match ours.",
  },
  {
    checked: <CiCircleCheck />,
    description: "We treat your business and your team like they are ours.",
  },
];

// ourservices section data

import DIGITALTRANSFORMATION from "../../assets/DIGITALTRANSFORMATION.png";
import STRATEGICPLANNING from "../../assets/STRATEGICPLANNING.png";
import TECHFINANCIALMODELING from "../../assets/TECHFINANCIALMODELING.png";
import VENDORMANAGEMENT from "../../assets/VENDORMANAGEMENT.png";
import TRANSFORMATIONACCELERATOR from "../../assets/TRANSFORMATIONACCELERATOR.png";
import CommanButton from "../Comman/CommanButton";

export const ServiceCard = [
  {
    image: DIGITALTRANSFORMATION,
    title: "DIGITAL TRANSFORMATION",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2"
        }
      />
    ),
  },
  {
    image: STRATEGICPLANNING,
    title: "STRATEGIC PLANNING",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2  s_phone:text-sm"
        }
      />
    ),
  },
  {
    image: TECHFINANCIALMODELING,
    title: "TECH FINANCIAL MODELING",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2"
        }
      />
    ),
  },
  {
    image: VENDORMANAGEMENT,
    title: "VENDOR MANAGEMENT",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2"
        }
      />
    ),
  },
  {
    image: TRANSFORMATIONACCELERATOR,
    title: "TRANSFORMATION ACCELERATOR",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2"
        }
      />
    ),
  },
  {
    image: TRANSFORMATIONACCELERATOR,
    title: "GOVERMENT SERVICES",
    btn: (
      <CommanButton
        text={"Read More"}
        className={
          "bg-[#0096E8] text-white font-semibold px-10 rounded-lg py-2"
        }
      />
    ),
  },
];

// trustedPartners data images
import transformationcompanylogo from "../../assets/transformationcompanylogo.png";
import unisyscompanylogo from "../../assets/unisyscompanylogo.png";
import bofinetcompanylogo from "../../assets/bofinetcompanylogo.png";
import privatedirectorslogo from "../../assets/privateddirectorslogo.png";

export const TrustedPartnersLogo = [
  {
    image: transformationcompanylogo,
  },
  {
    image: unisyscompanylogo,
  },
  {
    image: bofinetcompanylogo,
  },
  {
    image: privatedirectorslogo,
  },
];

// contactusData email address and number
// import { TiMail } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
export const Informations = [
  {
    logo: <IoIosMailUnread />,
    contact: "info@a360s.com",
  },
  {
    logo: <FaPhoneAlt />,
    contact: "+1 (703) 644-8000",
  },
  {
    logo: <FaLocationDot />,
    contact: `46164 Westlake Dr. #650422 Sterling,  VA 20165-9998`,
  },
];

// footer link and data
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
export const foorterContent1 = [
  {
    title: "Quick Links",
    array: [
      {
        text: "Home",
      },
      {
        text: "About Us",
      },
      {
        text: "Services",
      },
      {
        text: "Government",
      },
      {
        text: "Case Studies",
      },
    ],
  },
  {
    title: "Support",
    array: [
      {
        text: "Terms & Conditions",
      },
      {
        text: "FAQ’s",
      },
      {
        text: "Privacy & Policy",
      },
      {
        text: "Contact Us",
      },
    ],
  },
  {
    title: "Get in Touch",
    array: [
      {
        logo: <MdLocationOn className="text-3xl mb-4 text-[#1B1C67]" />,
        text: "46164 Westlake Dr. #650422 Sterling, VA 20165-9998",
      },
      {
        logo: <IoMail className="text-xl text-[#1B1C67]" />,
        text: "info@a360s.com",
      },
      {
        logo: <IoCall className="text-xl text-[#1B1C67]" />,
        text: "+1 (703) 644-8000",
      },
    ],
  },
];
