import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import "./common.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const Home = lazy(() => import("./pages/HomePage/Home"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const CollectionsPage = lazy(() =>
  import("./pages/CollectionsPage/CollectionsPage")
);
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const ScrollToTop = lazy(() => import("./utils/scrollToTop"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

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
        
        <Suspense fallback={<h3>Loading...</h3>}>
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
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
