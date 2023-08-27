import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import products from "../data/products";
import { motion } from "framer-motion";

function ShoppingCart({ handleCartExit }) {
  console.log("vegeto");
  const {
    subTotal,
    totalCartItems,
    cartItems,
    addItems,
    removeItems,
    deleteItem,
  } = useContext(CartContext);

  const totalItems = totalCartItems();
  const total = subTotal(); // Call the subTotal function to get the subtotal value
  console.log(total);

  return (
    <div className="">
      <motion.div
        className="fixed max-w-[768px] w-full min-h-screen top-5 bottom-0 right-0 overflow-y-scroll bg-white z-[60] rounded-md p-4"
        initial={{ y: "100%" }} // Slide in if displayMenu is true, otherwise slide out
        animate={{ y: 0 }} // Slide in if displayMenu is true, otherwise slide out
        transition={{ duration: 0.5 }}
        exit={{ y: "100%" }}
      >
        <div className="flex items-center justify-center p-2 mb-4">
          <h3 className="text-sm font-medium">YOUR BAG</h3>
          <AiOutlineClose
            className="absolute right-4 text-xl cursor-pointer"
            onClick={handleCartExit}
          />
        </div>
        <div className="relative h-40 bg-slate-200 p-2">
          <h3 className="text-center font-bold">SUMMARY</h3>
          <div className="border-b border-slate-100 py-3"></div>
          <div className="flex justify-between pr-2 pt-4">
            <h4 className="">{totalItems} Items</h4>
            <h4 className="">${total}</h4>
          </div>

          <div className="absolute w-full bottom-4 flex justify-between pr-6">
            <h4 className="font-semibold">Sub Total</h4>
            <h4 className="font-semibold">${total}</h4>
          </div>
        </div>
        <div>
          {Object.keys(cartItems).map((item) =>
            Object.keys(cartItems[item]).map((size) => {
              console.log(cartItems[item][size]);
              if (cartItems[item][size] > 0) {
                const product = products.find(
                  (product) => product.id === Number(item)
                );
                return (
                  <div
                    key={product.id + Math.floor(Math.random() * 1001)}
                    className="flex pt-4 items-start space-x-2"
                  >
                    <img
                      src={product.src}
                      alt={product.name}
                      className="h-36 w-28 object-cover"
                    />
                    <div className="">
                      <p className="">{product.name}</p>
                      <p className="text-sm text-slate-600">{product.color}</p>
                      <p className="text-sm text-slate-600">
                        {size.toUpperCase()}
                      </p>
                      <div className="flex gap-x-2">
                        <p className="text-sm font-medium">
                          Quantity: {cartItems[item][size]}
                        </p>

                        <AiFillPlusCircle
                          className="bg-white text-lg text-slate-400 cursor-pointer"
                          onClick={() => {
                            addItems(product.id, size);
                          }}
                        />
                        <AiFillMinusCircle
                          className="bg-white text-lg text-slate-400 cursor-pointer mb-2"
                          onClick={() => {
                            removeItems(product.id, size);
                          }}
                        />
                      </div>

                      <div className="flex justify-center items-center cursor-pointer bg-slate-300 w-5 h-5 rounded-full mb-1.5">
                        <FiTrash2
                          className="text-sm"
                          onClick={() => deleteItem(product.id, size)}
                        />
                      </div>
                      <p className="text-sm font-medium">${product.price}</p>
                    </div>
                  </div>
                );
              }
              return null; // Return null if item[size] <= 0
            })
          )}
        </div>
      </motion.div>

      <div className="fixed inset-0 h-screen w-full z-[55] bg-black opacity-70"></div>
    </div>
  );
}

export default ShoppingCart;
