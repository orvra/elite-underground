import React, { createContext, useState } from "react";
import products from "../data/products";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = { xs: 0, s: 0, m: 0, l: 0, xl: 0 };
  }
  return cart;
};

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [displayWishlistPopup, setDisplayWishlistPopup] = useState(false);

  const addItems = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: prev[itemId][size] + 1,
      },
    }));
  };

  const removeItems = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: prev[itemId][size] - 1,
      },
    }));
  };

  const deleteItem = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: 0,
      },
    }));
  };

  const subTotal = () => {
    let total = 0;

    for (let itemId in cartItems) {
      const itemSizes = cartItems[itemId]; // Get the object representing item sizes
      let quantity = 0; // Reset quantity for each item

      for (let size in itemSizes) {
        quantity += Number(itemSizes[size]);
      }

      const product = products.find((item) => item.id === Number(itemId));
      total += product.price * quantity;
    }
    return total;
  };

  const totalCartItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += Number(cartItems[itemId][size]);
      }
    }
    return total;
  };

  const openWishlistPopup = () => {
    setDisplayWishlistPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closeWishlistPopup = () => {
    setDisplayWishlistPopup(false);
    document.body.style.overflow = "auto";
  };

  const cardContextValue = {
    cartItems,
    addItems,
    removeItems,
    subTotal,
    totalCartItems,
    deleteItem,
    openWishlistPopup,
    closeWishlistPopup,
    displayWishlistPopup,
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={cardContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
