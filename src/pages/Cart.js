import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../Styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Fix total calculation: remove $ and commas
  const total = cart.reduce((sum, item) => {
    const priceNum = Number(item.price.replace(/[$,]/g, "")) || 0;
    return sum + priceNum * (item.quantity || 1);
  }, 0);

  return (
    <div className="cart">
     <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-horizontal">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="price-text">{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-box">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            Total: <strong>${total.toFixed(2)}</strong>
          </div>

          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
