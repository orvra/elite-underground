import { useState, useEffect, useContext } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CartContext } from "./context/CartContext";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import SearchResults from "./pages/SearchResults";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import MenuOverlay from "./components/MenuOverlay";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import Wishlist from "./pages/Wishlist";
import WishlistPopup from "./components/WishlistPopup";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [displayCart, setDisplayCart] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();
  const { displayWishlistPopup } = useContext(CartContext);

  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    setQuery(input);
    localStorage.setItem("searchQuery", input);
    navigate(`/search?q=${input}`);
    setInput("");
    handleMenuClose();
  };
  const handleMenuClick = () => {
    setDisplayMenu(true);
    document.body.style.overflow = "hidden";
  };
  const handleMenuClose = () => {
    setDisplayMenu(false);
    document.body.style.overflow = "auto";
  };
  const handleCartClick = () => {
    setDisplayCart(true);
    document.body.style.overflow = "hidden";
  };

  const handleCartExit = () => {
    setDisplayCart(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <AnimatePresence>
        {displayCart && <ShoppingCart handleCartExit={handleCartExit} />}
      </AnimatePresence>

      <AnimatePresence>
        {displayMenu && (
          <MenuOverlay
            handleMenuClose={handleMenuClose}
            displayMenu={displayMenu}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            value={input}
          />
        )}
      </AnimatePresence>
      {displayWishlistPopup && <WishlistPopup />}
      <Navbar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        value={input}
        handleCartClick={handleCartClick}
        handleCartExit={handleCartExit}
        handleMenuClick={handleMenuClick}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="elite-underground/home" element={<Home />} />
        <Route path="elite-underground/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/search" element={<SearchResults query={query} />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
