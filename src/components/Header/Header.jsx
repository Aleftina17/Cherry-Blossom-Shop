import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";

import "./header.scss";

import loupe from "./../../assets/img/navbar/loupe-icon.svg";
import logo from "./../../assets/img/navbar/logo.png";

const Header = ({ toggleMenu }) => {
  const { subtotal } = useContext(CartContext);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav__menu">
            <button className="btn btn--menu" onClick={toggleMenu}></button>
          </div>
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="nav__widgets">
            <NavLink to="/search" className="btn btn--search">
              <img src={loupe} alt="search" />
            </NavLink>
            <NavLink to="/cart" className="btn btn--cart">
              <div className="cart__price">{`$${subtotal.toFixed(2)}`}</div>
              {subtotal > 0 && <div className="btn--cart__indicator"></div>}
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
