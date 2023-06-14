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
              <span className="list__title">  Menu  </span>
              <li className="list__item">
                <a href="#!">Search</a>
              </li>
              <li className="list__item">
                <a href="#!">Home</a>
              </li>
              <li className="list__item">
                <a href="#!">About us</a>
              </li>
              <li className="list__item">
                <a href="#!">Catalog</a>
              </li>
              <li className="list__item">
                <a href="#!">Collections</a>
              </li>
              <li className="list__item">
                <a href="#!">Contacts</a>
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
              <img src={pinterestIco} alt="Pinterest" />
              <img src={instagramIco} alt="Instagram" />
              <img src={facebookIco} alt="Facebook" />
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
            <span className="list__title">Legal Notice</span>
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
