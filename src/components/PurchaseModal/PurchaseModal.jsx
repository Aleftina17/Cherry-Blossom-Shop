import { useState, useContext } from "react";
import "./purchase-modal.scss";
import { CartContext } from '../CartContext/CartContext';
import QuantityInput from "../QuantityInput/QuantityInput";

const PurchaseModal = (props) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    const product = {
      title: props.title,
      price: props.price,
      img: props.img,
      quantity: quantity,
      size: selectedSize,
    };
    addToCart(product);
    props.onClose();
  };

  const handleWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) {
      props.onClose();
    }
  };

  return (
    <div className="modal-wrapper" onClick={handleWrapperClick}>
      <div className="modal">
        <button className="btn--close" onClick={props.onClose}></button>
        <div className="modal__content">
          <div className="modal__img">
            <img src={props.img} alt="bouquet" />
          </div>
          <div className="modal__title">{props.title}</div>
          <div className="modal__price">{props.price}</div>
          <div className="modal__size">
            <span>Size</span>
            <div className="modal__size--options">
              <div className="row">
                <div className="modal__size--option">
                  <input
                    type="radio"
                    value="small"
                    id="small"
                    name="size"
                    checked={selectedSize === "small"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="small">small</label>
                </div>
                <div className="modal__size--option">
                  <input
                    type="radio"
                    value="medium"
                    id="medium"
                    name="size"
                    checked={selectedSize === "medium"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="medium">medium</label>
                </div>
                <div className="modal__size--option">
                  <input
                    type="radio"
                    value="large"
                    id="large"
                    name="size"
                    checked={selectedSize === "large"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="large">large</label>
                </div>
              </div>
              <div className="row">
                <div className="modal__size--option">
                  <input
                    type="radio"
                    value="deluxe"
                    id="deluxe"
                    name="size"
                    checked={selectedSize === "deluxe"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="deluxe">deluxe</label>
                </div>
                <div className="modal__size--option">
                  <input
                    type="radio"
                    value="luxe"
                    id="luxe"
                    name="size"
                    checked={selectedSize === "luxe"}
                    onChange={handleSizeChange}
                  />
                  <label htmlFor="luxe">luxe</label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__footer">
            <div className="modal__quantity">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
            <button
              className="btn btn--add-to-cart"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
