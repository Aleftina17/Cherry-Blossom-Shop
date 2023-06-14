import "./header.scss";

import loupe from "./../../assets/img/navbar/loupe-icon.svg";
import logo from "./../../assets/img/navbar/logo.png";

const Header = ({ toggleMenu }) => {

  return (
    <header className='header'>
      <div className="container">
        <nav className="nav">
          <div className="nav__menu">
            <button className="btn btn--menu" onClick={toggleMenu}></button>
          </div>
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav__widgets">
            <button className="btn btn--search">
              <img src={loupe} alt="search" />
            </button>
            <button className="btn btn--cart">
              <div className="cart__price">40,25$</div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
