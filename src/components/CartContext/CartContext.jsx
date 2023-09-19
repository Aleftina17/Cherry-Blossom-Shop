import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.title === product.title && item.size === product.size
    );

    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];
      const totalQuantity = existingItem.quantity + product.quantity;

      if (totalQuantity <= 20) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity = totalQuantity;
        setCartItems(updatedCartItems);
      } else {
        alert(
          "Quantity limit exceeded. You can add up to 20 identical products of the same size."
        );
      }
    } else {
      if (product.quantity <= 20) {
        setCartItems([...cartItems, product]);
      } else {
        alert(
          "Quantity limit exceeded. You can add up to 20 identical products of the same size."
        );
      }
    }
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.title !== product.title || item.size !== product.size
      )
    );
  };

  const updateCartItemQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
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
  }, [cartItems]);

  // Local Storage
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
