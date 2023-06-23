import "./cart-page.scss";

import { CartContext } from "../../components/CartContext/CartContext";
import { useContext, useState, useEffect } from "react";

import deleteImg from "./../../assets/img/cart/delete-ico.svg";

import Navigation from "../../components/Navigation/Navigation";
import { NavLink } from "react-router-dom";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";
import QuantityInput from "../../components/QuantityInput/QuantityInput";


const CartPage = () => {
  const { removeFromCart, cartItems, updateCartItemQuantity} = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);

  const handleQuantityChange = (index, value) => {
    updateCartItemQuantity(index, value);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  useEffect(() => {
    const calculateSubtotal = () => {
      let total = 0;
      cartItems.forEach((item) => {
        const price = parseFloat(item.price.replace("$", ""));
        total += price * item.quantity;
      });
      setSubtotal(total);
     
    };
    calculateSubtotal();
  }, [cartItems])


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

          {cartItems.length === 0 ? (
            <div className="cart__empty">Your cart is empty</div>
          ) : (
          cartItems.map((item, index) => (
            <div className="cart__row" key={item.title}>
              <div className="cart__product">
                <img
                  className="cart__product__img"
                  src={item.img}
                  alt="product"
                />
                <div className="cart__product__info">
                  <div className="cart__product__info--title">{item.title}</div>
                  <div className="cart__product__info--price">{item.price}</div>
                  <div className="cart__product__info--size">Size: {item.size}</div>
                </div>
              </div>

              <QuantityInput
                  quantity={item.quantity}
                  setQuantity={(value) => handleQuantityChange(index, value)}
                />

              <div className="cart__delete">
                <button className="delete" onClick={() => handleRemoveFromCart(item)}>
                  <img src={deleteImg} alt="delete" />
                </button>
              </div>

              <div className="cart__price">{`$${item.price.replace('$', '') * item.quantity}`}</div>
            </div>
          )))}


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
            <span className="cart__gift-message--title">Gift message</span>
            <textarea
              name=""
              id=""
              placeholder="Add your gift message here"
            ></textarea>
          </div>

          <div className="cart__subtotal">
            <div className="subtotal__price">
              <span>Subtotal</span> ${subtotal.toFixed(2)}
            </div>
            <div className="subtotal__desc">
              Taxes and shipping calculated at checkout
            </div>
            <button className="btn btn--check-out">Check out</button>
          </div>
        </div>

        <SpecialOffer />
      </div>
    </section>
  );

  
};

export default CartPage;


