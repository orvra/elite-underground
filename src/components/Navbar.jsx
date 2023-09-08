import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar({
  handleInputChange,
  handleSubmit,
  value,
  handleCartClick,
  handleMenuClick,
}) {
  const { totalCartItems } = useContext(CartContext);

  return (
    <>
      <div className="relative max-w-[1450px] mx-auto mb-[69px]">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ">
          <nav className="max-w-[1450px] mx-auto   flex justify-between items-center py-4 px-4">
            <Link to="/">
              <img
                src="/elite-underground/images/logo/EUG_v8.png"
                alt="logo"
                className="w-20"
              />
            </Link>
            <ul className="space-x-7 pl-48 hidden lg:block">
              <li className="inline-block">
                <Link to="/men">MEN</Link>
              </li>
              <li className="inline-block">
                <Link to="/women">WOMEN</Link>
              </li>
              <li className="inline-block">
                <Link to="/kids">KIDS</Link>
              </li>
              <li className="inline-block">
                <Link to="/accessories">ACCESSORIES</Link>
              </li>
            </ul>

            <div className="flex space-x-4 items-center">
              <Link to="/wishlist">
                <FaRegHeart className="text-lg cursor-pointer" />
              </Link>
              <div
                className="relative cursor-pointer"
                onClick={handleCartClick}
              >
                <RiShoppingBagLine className="text-xl" />
                <p
                  className={
                    totalCartItems() === 0
                      ? "hidden"
                      : "absolute top-3 left-2.5 text-[8px] px-1 bg-red-500 text-white rounded-full"
                  }
                >
                  {totalCartItems()}
                </p>
              </div>
              <AiOutlineMenu
                className="lg:hidden text-2xl cursor-pointer"
                onClick={handleMenuClick}
              />
              <div className="hidden lg:block">
                <SearchInput
                  handleInput={handleInputChange}
                  handleSubmit={handleSubmit}
                  value={value}
                />
              </div>
            </div>
          </nav>
          <div className="px-4 pb-1.5 lg:hidden">
            <SearchInput
              handleInput={handleInputChange}
              handleSubmit={handleSubmit}
              value={value}
            />
          </div>
        </div>

        {/*SMALL GRAY AREA UNDER NAV */}
        <div className="bg-gray-200 lg:h-[1px]"></div>
      </div>
    </>
  );
}

export default Navbar;
