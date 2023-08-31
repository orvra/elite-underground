import React, { useContext } from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import MainButton from "../components/MainButton";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

function WishlistPopup() {
  const { closeWishlistPopup } = useContext(CartContext);
  return (
    <>
      <div className="fixed w-full h-[400px] px-4 z-[80] top-1/4">
        <div className="relative flex flex-col h-full max-w-[400px] space-y-10 text-center items-center justify-center mx-auto bg-white rounded-xl">
          <div
            onClick={() => closeWishlistPopup()}
            className="absolute top-3 right-3 bg-gray-200 rounded-full p-1.5 hover:text-white"
          >
            <AiOutlineClose />
          </div>
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">YOUR WISHLIST</h1>
            <BsEmojiHeartEyes className="text-2xl text-red-600" />
          </div>
          <p className="text-slate-600 text-[16px]">
            Create your account or login to see your wishlist!
          </p>
          <div className="flex flex-col space-y-4 w-full px-4">
            <button
              className={`bg-gray-200 rounded-full transition ease-in-out delay-100 hover:bg-black hover:text-white duration-300`}
            >
              CREATE ACCOUNT
            </button>
            <button
              className={`bg-gray-200 rounded-full transition ease-in-out delay-100 hover:bg-black hover:text-white duration-300`}
            >
              LOG IN
            </button>
            <MainButton />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 h-screen w-full z-[55] bg-black opacity-70"></div>
    </>
  );
}

export default WishlistPopup;
