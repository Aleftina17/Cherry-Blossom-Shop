import { NavLink } from "react-router-dom";
import "./hero.scss";

import delivery1 from "./../../assets/img/hero/hero-delivery-icon.svg";
import delivery2 from "./../../assets/img/hero/hero-delivery-icon-2.svg";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Choose flowers for any occasion</h1>
          <div className="hero__desc">
            Our goal is to provide the highest quality and fresh flower delivery
            in Los Angeles.
          </div>
          <NavLink to="/catalog" className="btn btn--view-now">View now</NavLink>
        </div>
      </div>

      <div className="hero__footer--wrapper">

      <div className="hero__footer container">

        <div className="hero__footer__item">
          <div className="hero__footer__content">
            <div className="hero__footer__content--title">
              Need flowers delivered today?
            </div>
            <div className="hero__footer__content--desc">Call or chat us</div>
          </div>

          <img className="hero__footer__img" src={delivery1} alt="delivery" />
        </div>

        <div className="hero__footer__item">
          <div className="hero__footer__content">
            <div className="hero__footer__content--title">
              Free delivery within 4 miles
            </div>
            <div className="hero__footer__content--desc">No minimum order</div>
          </div>

          <img className="hero__footer__img" src={delivery2} alt="delivery" />
        </div>


      </div>
      </div>
    </section>
  );
};

export default Hero;
