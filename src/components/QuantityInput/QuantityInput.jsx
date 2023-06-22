import { useState } from "react";
import "./quantity-input.scss";

const QuantityInput = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity-input">
      <button class="plus" type="button" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        id="quantityInput"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(+(e.target.value))}
        required
      />
      <button class="minus" type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
