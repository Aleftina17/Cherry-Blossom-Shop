import { NavLink } from "react-router-dom";
import "./footer.scss";

import logoBig from "./../../assets/img/footer/logo-big.svg";
import facebookIco from "./../../assets/img/footer/facebook-ico.svg";
import instagramIco from "./../../assets/img/footer/instagram-ico.svg";
import pinterestIco from "./../../assets/img/footer/pinterest-ico.svg";
import payment from "./../../assets/img/footer/payment.jpg";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="footer">
          <div className="footer__menu">
            <ul className="list">
              <h4 className="list__title"> Menu </h4>
              <li className="list__item">
                <NavLink to="/search">Search</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/catalog">Catalog</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/collections">Collections</NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <img
              className="footer__contact--img"
              src={logoBig}
              alt="cherry blossom"
            />
            <div className="footer__contact--address">
              6201 Hollywood blvd <br /> Los Angeles, California 90028
            </div>
            <div className="footer__contact--time">
              Monday - Friday 9:00 am - 8:00 pm
              <br />
              Saturday 10:00 am - 5:00 pm
              <br />
              Sunday 10:00 am - 5:00 pm
            </div>
            <a href="tel:+2147725674" className="footer__contact--phone">
              +214 772 56 74
            </a>
            <a
              href="mailto:cherryblossom@gmail.com"
              className="footer__contact--email"
            >
              cherryblossom@gmail.com
            </a>
            <div className="footer__contact--socials">
              <a href="#!">
                <img src={pinterestIco} alt="Pinterest" />
              </a>
              <a href="#!">
                <img src={instagramIco} alt="Instagram" />
              </a>
              <a href="#!">
                <img src={facebookIco} alt="Facebook" />
              </a>
            </div>
            <img
              src={payment}
              className="footer__contact--payment"
              alt="Payment"
            />
            <div className="footer__contact--copyright">
              © 2022, Los Angeles Florist - Cherry Blossom
            </div>
          </div>

          <div className="footer__notice">
            <ul className="list">
              <h4 className="list__title">Legal Notice</h4>
              <li className="list__item">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list__item">
                <a href="#!">Terms of Service</a>
              </li>
              <li className="list__item">
                <a href="#!">Refund Policy</a>
              </li>
              <li className="list__item">
                <a href="#!">Shipping police</a>
              </li>
              <li className="list__item">
                <a href="#!">Billing and payment</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
