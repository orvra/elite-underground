import React from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import MainButton from "../components/MainButton";

function Wishlist() {
  return (
    <div className="w-full h-[500px] px-4">
      <div className="flex flex-col h-full max-w-[400px] space-y-10 text-center items-center justify-center mx-auto">
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
  );
}

export default Wishlist;
