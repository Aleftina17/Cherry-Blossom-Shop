import "./quantity-input.scss";

const QuantityInput = ({ quantity, setQuantity }) => {

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value) && value > 0 && value <= 20) {
      setQuantity(value);
    } else if (isNaN(value) || value <= 0) {
      setQuantity(1);
    } else if (value > 20) {
      setQuantity(20);
    }
  };

  return (
    <div className="quantity-input">
      <button className="plus" type="button" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        id="quantityInput"
        value={quantity}
        onChange={handleInputChange}
        required
      />
      <button className="minus" type="button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
