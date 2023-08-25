import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsChevronCompactRight } from "react-icons/bs";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MenuOverlay({
  handleMenuClose,
  displayMenu,
  handleInputChange,
  handleSubmit,
  value,
}) {
  const [selectedItem, setSelectedItem] = useState("WOMEN");
  const [selectedImage, setSelectedImage] = useState(
    "/src/images/clothing/woman_yoga.jpg"
  );
  const [link, setLink] = useState("/women");

  // Function to update the body's overflow based on the screen size and menu visibility
  const updateBodyOverflow = () => {
    if (displayMenu) {
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "auto"; // Enable scrolling
      } else {
        document.body.style.overflow = "hidden"; // Disable scrolling
      }
    }
  };

  useEffect(() => {
    // Listen for changes in window size and call updateBodyOverflow
    window.addEventListener("resize", updateBodyOverflow);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateBodyOverflow);
    };
  }, [displayMenu]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    switch (item) {
      case "WOMEN":
        setSelectedImage("/src/images/clothing/woman_yoga.jpg");
        setLink("/women");
        break;
      case "MEN":
        setSelectedImage("/src/images/clothing/man_kicking.jpg");
        setLink("/men");
        break;
      case "KIDS":
        setSelectedImage("/src/images/clothing/kid_skiing.jpg");
        setLink("/kids");
        break;
      case "ACCESSORIES":
        setSelectedImage("/src/images/clothing/accessories.jpg");
        setLink("/accessories");
        break;
      default:
        setSelectedImage("/src/images/clothing/woman_yoga.jpg");
        setLink("/women");
    }
  };

  return (
    <motion.div
      className="fixed w-full min-h-screen top-0 bottom-0 z-20 bg-white md:overflow-y-scroll lg:hidden"
      initial={{ x: "100%" }} // Slide in if displayMenu is true, otherwise slide out
      animate={{ x: 0 }} // Slide in if displayMenu is true, otherwise slide out
      transition={{ duration: 0.5 }}
      exit={{ x: "100%" }}
    >
      <AiOutlineClose
        className="absolute right-5 top-8 text-2xl cursor-pointer"
        onClick={handleMenuClose}
      />
      <div className="px-6 pt-20">
        <SearchInput
          handleInput={handleInputChange}
          handleSubmit={handleSubmit}
          value={value}
        />
      </div>
      <h2 className="absolute left-6 top-6 text-2xl font-medium">SHOP</h2>
      <div className="p-6 space-y-6 font-medium">
        <h2
          className={`cursor-pointer ${
            selectedItem === "WOMEN" ? "underline" : ""
          }`}
          onClick={() => handleItemClick("WOMEN")}
        >
          WOMEN
        </h2>
        <h2
          className={`cursor-pointer ${
            selectedItem === "MEN" ? "underline" : ""
          }`}
          onClick={() => handleItemClick("MEN")}
        >
          MEN
        </h2>
        <h2
          className={`cursor-pointer ${
            selectedItem === "KIDS" ? "underline" : ""
          }`}
          onClick={() => handleItemClick("KIDS")}
        >
          KIDS
        </h2>
        <h2
          className={`cursor-pointer ${
            selectedItem === "ACCESSORIES" ? "underline" : ""
          }`}
          onClick={() => handleItemClick("ACCESSORIES")}
        >
          ACCESSORIES
        </h2>
      </div>
      <Link to={link} onClick={handleMenuClose}>
        <div className="relative py-4 px-6 w-full h-[350px] md:h-3/5">
          <img className="h-full w-full object-cover" src={selectedImage} />
          <div className="absolute bottom-8 right-10">
            <button className="bg-slate-500 bg-opacity-80 text-white text-opacity-100 rounded-full px-8 py-4 hover:bg-opacity-100">
              <div className="flex gap-3 items-center text-xl">
                <p className="tracking-tighter">BROWSE</p>
                <div className="flex w-8 h-8 border-2 justify-center items-center rounded-full">
                  <BsChevronCompactRight className="pl-1 text-2xl" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3 border-b md:border-b"></div>
      <div className="mt-3 px-6 text-slate-700 space-y-2 mb-4 md:pt-3">
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Elite Underground App
        </p>
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Store Locator
        </p>
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Start A Return
        </p>
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Track My Order
        </p>
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Check Return Status
        </p>
        <p className="text-sm font-medium cursor-pointer hover:text-[#FF0000]">
          Help & Support
        </p>
      </div>
    </motion.div>
  );
}

export default MenuOverlay;
