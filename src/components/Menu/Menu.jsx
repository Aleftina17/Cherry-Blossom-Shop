import { NavLink } from "react-router-dom";

import "./menu.scss";

const Menu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`navigation-menu ${isOpen ? "visible" : ""}`}>
      <button className="btn--close" onClick={closeMenu}></button>
      <ul className="navigation-menu__list">
        <li>
          <NavLink to="/search" onClick={closeMenu}>Search</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" onClick={closeMenu}>About us</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" onClick={closeMenu}>Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/collections" onClick={closeMenu}>Collections</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" onClick={closeMenu}>Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
