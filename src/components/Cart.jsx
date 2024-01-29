import React from "react";

const Cart = ({ cartItems, isCartOpen, clearCartItem }) => {

  const cartItemsList = cartItems.map((item, index) => (
    <li className="cart-item" key={index}>
      <img src={item.image} className="cart-thumbnail" />
      <div className="cartItem-info">
        <span className="item-name">{item.name}</span>

        <span className="item-price">
          ${item.price}.00 x {item.quantity}
          <span className="item-total"> ${item.price * item.quantity}.00</span>
        </span>
        <button type="button" aria-label="clear cart" className="clearCartBtn" onClick={clearCartItem}>
          <img
            src="/assets/icon-delete.svg"
            alt="delete icon"
            width={14}
            height={16}
          />
        </button>
      </div>
    </li>
  ));

  const hiddenCart = {
    visibility: isCartOpen ? "visible" : "hidden",
  };

  return (
    <section className="cart-container" style={hiddenCart}>
      <h2>Cart</h2>
      <hr />
      <div className="cart-items-wrapper">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-list">
            <ul className="cartItemsList">{cartItemsList}</ul>
            <button className="checkoutBtn">Checkout</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
