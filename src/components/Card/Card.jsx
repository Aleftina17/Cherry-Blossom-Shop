import "./card.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const Card = (props) => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const openPurchaseModal = () => {
    setShowPurchaseModal(true);
  };

  const closePurchaseModal = () => {
    setShowPurchaseModal(false);
  };

  return (
    <div className={`card ${props.className}`}>
      <NavLink to={`/product/${props.id}`} className="card--link">
        <div className="card__img">
          <img src={props.img} alt="boquet" />
        </div>
      </NavLink>

      <div className="card__desc">
        <div className="card__desc__info">
          <NavLink to={`/product/${props.id}`} className="card--link">
            <div className="card__desc__info--title">{props.title}</div>

            <span
              className={`card__desc__info--price ${
                props.isOnSale ? "on-sale" : ""
              }`}
            >
              {props.price}
            </span>

            {props.discount && props.isOnSale && (
              <span className="card__desc__info--discount">
                &nbsp;&nbsp;&nbsp;{props.discount}
              </span>
            )}

            {props.isOnSale && (
              <div className="card__desc__info--price--sale">
                {props.discountPrice}
              </div>
            )}
          </NavLink>
        </div>

        {props.amount !== 0 ? (
          <button className="btn btn--add-to-cart" onClick={openPurchaseModal}>
            Add to cart
          </button>
        ) : (
          <button className="btn btn--sold-out">Sold out</button>
        )}
      </div>

      {showPurchaseModal && (
        <PurchaseModal
          img={props.img}
          title={props.title}
          price={props.discountPrice}
          onClose={closePurchaseModal}
        />
      )}
    </div>
  );
};

export default Card;
