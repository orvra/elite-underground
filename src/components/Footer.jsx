import React, { useState, useEffect } from "react";
import FooterMobile from "./FooterMobile";
import FooterLgScreen from "./FooterLgScreen";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="max-w-[1450px] mx-auto px-4">
      <div className="bg-gray-200 h-[1px] mt-0 lg:mb-8 lg:mt-12"></div>
      {windowWidth >= 1000 ? <FooterLgScreen /> : <FooterMobile />}
      <div className="bg-gray-200 h-[1px] mt-0 lg:mt-8"></div>
      <div className="flex justify-center items-center space-x-8 my-8 text-2xl">
        <FaFacebookF className="cursor-pointer hover:mb-0.5 text-blue-500" />
        <FaPinterestP className="cursor-pointer hover:mb-0.5 text-red-700" />
        <FaInstagram className="cursor-pointer hover:mb-0.5 text-red-400" />
        <FaYoutube className="cursor-pointer hover:mb-0.5 text-red-600" />
        <FaTiktok className="cursor-pointer hover:mb-0.5" />
      </div>
      <div className="flex flex-col items-center text-[13px] font-medium text-slate-600 space-y-1.5">
        <p className="cursor-pointer hover:text-slate-800">
          Terms and Conditions
        </p>
        <p className="cursor-pointer hover:text-slate-800">Terms of Use</p>
        <p className="cursor-pointer hover:text-slate-800">Privacy Policy</p>
        <p className="cursor-pointer hover:text-slate-800">Cookie Policy</p>
        <p className="cursor-pointer hover:text-slate-800">
          Parliament Hill Act
        </p>
      </div>
      <div className="bg-gray-200 h-[1px] mt-4"></div>
      <p className="text-sm tracking-tighter text-center text-slate-700 py-4">
        © 2023 | Elite Underground | All Rights Reserved | The Beggining is Now.
      </p>
    </div>
  );
}

export default Footer;
