import "./subscribe.scss";

import arrow from "./../../assets/img/subscribe/arrow.svg";

const Subscribe = () => {
  return (
    <section className="section-subscribe">
      <div className="container">
        <div className="subscribe">
          <h4 className="subscribe__title">Subscribe to our emails</h4>
          <div className="subscribe__desc">
            Be the first to know about new collections and exclusive offers.
          </div>
          <div className="subscribe__input-wrapper">
            <input
              type="email"
              placeholder="E-mail"
              className="subscribe__input"
              id="subscriberEmail"
              autoComplete="email"
            />
            <button className="input-submit">
              <img src={arrow} alt="subscribe" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
