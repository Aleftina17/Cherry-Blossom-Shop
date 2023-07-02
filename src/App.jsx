import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import "./common.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage/CartPage";
import Home from "./pages/HomePage/Home";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import Menu from "./components/Menu/Menu";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";

import ScrollToTop from "./utils/scrollToTop";
import SearchPage from "./pages/SearchPage/SearchPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Header toggleMenu={toggleMenu} />

        <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
