import "./cart-page.scss";

import img from "./../../assets/img/products/product-1.jpg";
import deleteImg from "./../../assets/img/cart/delete-ico.svg";

import Navigation from "../../components/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";

const CartPage = () => {
  return (
    <section className="section-cart">
      <div className="container">
        <div className="cart__header">
          <Navigation title="Cart" />
          <NavLink to="/catalog" className="continue-shoping--link">
            Continue shopping
          </NavLink>
        </div>

        <div className="cart">
          <div className="cart__row">

            <div className="cart__product">
              <img className="cart__product__img" src={img} alt="product" />
              <div className="cart__product__info">
                <div className="cart__product__info--title">
                  Diamond bouquet pink roses
                </div>
                <div className="cart__product__info--price">$260.00</div>
                <div className="cart__product__info--size">Size: medium</div>
              </div>
            </div>

            <div className="cart__quantity">
              <button class="plus" type="button">
                -
              </button>
              <input
                type="number"
                id="quantityInput"
                min="1"
                value="1"
                required
              />
              <button class="minus" type="button">
                +
              </button>
            </div>

            <div className="cart__delete">
              <button className="delete">
                
                <img src={deleteImg} alt="delete" />
              </button>
            </div>

            <div className="cart__price">$260.00</div>
          </div>

          <div className="cart__footer">
            <div className="cart__instructions">
                <span className="cart__instructions--title">
                Special instructions for seller
                </span>
                <textarea
                name=""
                id=""
                placeholder="Add your instructions for seller here"
                ></textarea>
            </div>

            <div className="cart__gift-message">
                <span className="cart__gift-message--title">
                Gift message
                </span>
                <textarea
                name=""
                id=""
                placeholder="Add your gift message here"
                ></textarea>
            </div>
            
            <div className="cart__subtotal">
                <div className="subtotal__price"><span>Subtotal</span> $260.00</div> 
                <div className="subtotal__desc">Taxes and shipping calculated at checkout</div>
                <button className="btn btn--check-out">Check out</button>
            </div>
          </div>

          
        </div>

        <SpecialOffer />
      </div>
    </section>
  );
};

export default CartPage;
