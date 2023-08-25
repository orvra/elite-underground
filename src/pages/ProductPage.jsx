import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

import { Rating, Slider } from "@mui/material";
import ItemCard from "../components/ItemCard";
import ProductTitle from "../components/ProductTitle";
import { BiRuler, BiShoppingBag, BiHeart, BiArrowBack } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import BasicAccordion from "../components/BasicAccordion";
import { CartContext } from "../context/CartContext";

function ProductPage() {
  const { productId } = useParams();
  const product = products.find(
    (product) => "EUG " + product.name === productId.replace(/-/g, " ")
  );

  useEffect(() => {
    setSizeValue(null);
    setDisplaySetSize(false);
  }, [product]);

  let suggestedProducts = products
    .filter((item) => item.gender === product.gender)
    .sort(() => Math.random() - 0.5);

  const [sliderValue, setSliderValue] = useState(20); // Initial value for the Slider
  const [sizeValue, setSizeValue] = useState(null);
  const [displaySelectSize, setDisplaySetSize] = useState(false);

  const { addItems } = useContext(CartContext);

  const handleSizeClick = (size) => {
    setSizeValue(size);
    setDisplaySetSize(false);
  };

  const handleSliderChange = () => {
    setSliderValue(product.fit); // Update the state when Slider value changes
  };

  const handleAddToBag = (size) => {
    if (sizeValue !== null) {
      addItems(product.id, size.toLowerCase());
      setSizeValue(null);
    } else {
      setDisplaySetSize(true);
    }
  };

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }

  const sizingText = (fit) => {
    switch (fit) {
      case 0:
        return "Slim fitting";
        break;
      case 10:
        return "Fits slightly smaller";
        break;
      case 20:
        return "Fits true to size";
        break;
      case 30:
        return "Fits slightly larger";
        break;
      case 40:
        return "Loose fitting";
        break;
    }
  };

  return (
    <div className="overflow-hidden my-4 min-[650px]:px-4 lg:max-w-[1140px] mx-auto">
      <div className="flex flex-col mt-4 min-[650px]:mt-8 lg:mt-0 min-[650px]:flex-row min-[650px]:space-x-8">
        <div className="flex justify-center h-[550px] min-[400px]:h-[650px] min-[450px]:h-[750px] min-[650px]:w-1/2 min-[650px]:h-[450px] md:h-[600px] lg:h-[750px] lg:w-[75%]">
          <img className="w-full h-full object-cover" src={product.src} />
        </div>

        <div className="px-3 min-[650px]:px-0 min-[650px]:w-1/2">
          {/*RATING and DISCOUNT SECTION*/}
          <div className="mb-4 lg:mb-6">
            <div className="flex items-center mt-3 mb-3 min-[650px]:mt-2 ">
              <div className="flex mr-1 text-sm">
                <Rating
                  name="read-only"
                  defaultValue={product.rating}
                  readOnly
                  size="small"
                  precision={0.1}
                  style={{ color: "black" }}
                />
              </div>
              <p className="text-sm mr-1">{product.rating}</p>
              <a href="">
                <h3 className="font-bold underline text-sm">(127)</h3>
              </a>
            </div>
            <p className="text-xs tracking-tighter inline-block font-bold p-2 bg-slate-200">
              50% OFF
            </p>
          </div>

          {/*PRODUCT INFO AND PRICING*/}
          <div className="mb-4 lg:mb-4">
            <div className="mt-2">
              <ProductTitle text={product.name} />
            </div>
            <p className="text-slate-600 text-xs my-1">
              Elite Underground Womens
            </p>
            <h3 className="text-sm inline">COLOR: </h3>

            <h3 className="inline text-sm text-gray-500">{product.color}</h3>
            <h3 className="text-sm font-bold mt-2">${product.price}</h3>
          </div>

          {/* SIZING SECTION */}

          <div className="mb-8 lg:mb-8">
            <div className="flex justify-between items-end">
              <h2 className="text-sm font-bold mt-2">SELECT SIZE</h2>
              <div>
                <p className="text-sm underline flex align-items space-x-1">
                  <BiRuler className="inline text-xl" />
                  <a>Size Guide</a>
                </p>
              </div>
            </div>
            <div className="flex justify-between my-2">
              <button
                className={
                  sizeValue !== "XS"
                    ? "py-1 px-6 bg-white border-[1px] border-black rounded-none hover:bg-black hover:text-white"
                    : "bg-black text-white py-1 px-6 rounded-none border-[1px] border-black"
                }
                onClick={() => handleSizeClick("XS")}
              >
                XS
              </button>
              <button
                className={
                  sizeValue !== "S"
                    ? "py-1 px-6 bg-white border-[1px] border-black rounded-none hover:bg-black hover:text-white"
                    : "bg-black text-white py-1 px-6 rounded-none border-[1px] border-black"
                }
                onClick={() => handleSizeClick("S")}
              >
                S
              </button>
              <button
                className={
                  sizeValue !== "M"
                    ? "py-1 px-6 bg-white border-[1px] border-black rounded-none hover:bg-black hover:text-white"
                    : "bg-black text-white py-1 px-6 rounded-none border-[1px] border-black"
                }
                onClick={() => handleSizeClick("M")}
              >
                M
              </button>
              <button
                className={
                  sizeValue !== "L"
                    ? "py-1 px-6 bg-white border-[1px] border-black rounded-none hover:bg-black hover:text-white"
                    : "bg-black text-white py-1 px-6 rounded-none border-[1px] border-black"
                }
                onClick={() => handleSizeClick("L")}
              >
                L
              </button>
              <button
                className={
                  sizeValue !== "XL"
                    ? "py-1 px-6 bg-white border-[1px] border-black rounded-none hover:bg-black hover:text-white"
                    : "bg-black text-white py-1 px-6 rounded-none border-[1px] border-black"
                }
                onClick={() => handleSizeClick("XL")}
              >
                XL
              </button>
            </div>
          </div>

          {/* ADD TO BAG and WISHLIST BUTTONS */}
          <div className="mb-6 lg:mb-8">
            <div className="w-full mt-4">
              <button
                className={
                  "rounded-full w-full text-white text-sm py-3 " +
                  (sizeValue !== null ? "bg-red-500" : "")
                }
                onClick={() => handleAddToBag(sizeValue)}
              >
                <div className="flex justify-center items-center space-x-2">
                  <BiShoppingBag /> <p>ADD TO BAG</p>
                </div>
              </button>
            </div>
            <div className="w-full mt-2 mb-4">
              <button className="rounded-full w-full text-white text-sm py-3">
                <div className="flex justify-center items-center space-x-2">
                  <BiHeart /> <p>ADD TO WISHLIST</p>
                </div>
              </button>
            </div>
            {displaySelectSize && (
              <p className="text-red-500 text-sm font-medium">
                Please select a size!
              </p>
            )}
          </div>
          {/* DELIVERY INFO SECTION */}
          <div>
            <h3 className="font-bold text-sm mb-2">WE DELIVER TO YOU.</h3>
            <div className="w-full bg-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <BiArrowBack className="text-xl" />
                <h3 className="text-sm text-gray-800 font-bold">
                  Free 30 Day Returns!
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <FiPackage className="text-xl" />
                <h3 className="text-sm text-gray-800 font-bold">
                  Free Standard Shipping Over $100
                </h3>
              </div>
            </div>
          </div>

          {/* PRODUCT DESC and DELIVERY DROPDOWNS */}
          <div className="my-6 lg:my-8">
            <BasicAccordion />
          </div>
        </div>
      </div>

      <div className="px-3 min-[650px]:px-0 lg:my-4">
        <h1 className="font-bold text-4xl mb-4">REVIEWS</h1>
        <div className="flex gap-1 items-center">
          <h2 className="font-bold text-xl inline">{product.rating}</h2>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            size="medium"
            precision={0.1}
            sx={{ color: "black" }}
          />
        </div>

        <h3 className="font-semibold my-4 text-xl">
          {sizingText(product.fit)}
        </h3>
        <div className="w-72 flex gap-x-2 items-center mb-8">
          <p className="text-sm">Smaller</p>
          <Slider
            aria-label="Temperature"
            value={product.fit}
            onChange={handleSliderChange}
            step={10}
            marks
            min={0}
            max={40}
            disabled
            sx={{
              "& .MuiSlider-thumb": {
                color: "black",
                borderRadius: "1px",
                width: "8px",
                height: "7px",
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: "none",
                },
              },
              color: "red",
              "& .MuiSlider-rail, & .MuiSlider-track": {
                color: "red", // Same color as the thumb
                opacity: 1,
              },
              "& .MuiSlider-mark": {
                color: "white",
                opacity: 1,
                width: "3px",
                height: "2px",
                marginLeft: "-1px",
              },
            }}
          />
          <p className="text-sm">Larger</p>
        </div>

        <h3 className="mb-4 font-semibold text-lg">You may also like</h3>
        {/*</div><div className="flex gap-2 overflow-x-auto">*/}
        <div className="grid grid-flow-col h-[600px] gap-x-1.5 overflow-x-auto overflow-y-hidden">
          {suggestedProducts.slice(0, 4).map((product) => (
            <ItemCard
              src={product.src}
              itemName={product.name}
              cost={product.price}
              color={product.color}
              id={product.id}
              height="600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
