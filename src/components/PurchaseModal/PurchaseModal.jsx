import { useState, useContext } from "react";
import "./purchase-modal.scss";
import { CartContext } from '../CartContext/CartContext';
import QuantityInput from "../QuantityInput/QuantityInput";
import SizeSelect from "../SizeSelect/SizeSelect";

const PurchaseModal = (props) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');


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
            <SizeSelect selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
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
