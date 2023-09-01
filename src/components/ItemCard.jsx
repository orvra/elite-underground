import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ItemCard({
  src,
  itemName,
  color,
  cost,
  height = 600,
  width = 400,
  id = 1,
}) {
  const [isShown, setIsShown] = useState(false);

  const { addItems, openWishlistPopup } = useContext(CartContext);

  return (
    <div className={`relative h-[${height}px] w-[350px]`}>
      <div
        className="relative h-4/5 mb-2"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <button
          onClick={() => openWishlistPopup()}
          className="absolute top-4 right-4 text-lg bg-white p-2 rounded-full"
        >
          <FaRegHeart className="text-lg" />
        </button>
        <Link to={`/products/EUG-${itemName.replace(/\s+/g, "-")}`}>
          <img
            className="h-full object-cover center cursor-pointer"
            src={src}
            alt=""
          />
        </Link>

        {isShown && (
          <div className="absolute inset-x-0 bottom-0 h-1/3 w-full p-2">
            <div className="h-full w-full">
              <div className="bg-white h-full w-full rounded opacity-80"></div>
              <div className="h-full w-full absolute top-0 left-0 flex flex-col justify-center align-middle items-center">
                <div className="flex items-center mb-2">
                  <h2 className="font-bold mx-2">Quick Add</h2>
                  <BiShoppingBag className="inline" />
                </div>
                <div>
                  <button
                    className="m-1 py-1 text-white"
                    onClick={() => addItems(id, "xs")}
                  >
                    XS
                  </button>
                  <button
                    className="m-1 py-1 text-white"
                    onClick={() => addItems(id, "s")}
                  >
                    S
                  </button>
                  <button
                    className="m-1 py-1 text-white"
                    onClick={() => addItems(id, "m")}
                  >
                    M
                  </button>
                  <button
                    className="m-1 py-1 text-white"
                    onClick={() => addItems(id, "l")}
                  >
                    L
                  </button>
                  <button
                    className="m-1 py-1 text-white"
                    onClick={() => addItems(id, "xl")}
                  >
                    XL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link to={`/products/EUG-${itemName.replace(/\s+/g, "-")}`}>
        <div>
          <h2 className="font-regular text-gray-800">{itemName}</h2>
          <h4 className="text-gray-500">{color}</h4>
          <h2 className="font-bold text-gray-900">${cost}</h2>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
