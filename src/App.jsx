import React, { useState } from "react";

import Header from "./components/Header";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Cart.css";
import "./styles/ProductPage.css";
import "./styles/Carousel.css";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";

const App = () => {
  const [isNavListOpen, setIsNavListOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clearCartItem = () => {
    setCartItems([]);
  };

  const addToCart = (product) => {
    if (product.quantity === 0) {
      return;
    }
  
    const existingProduct = cartItems.find((item) => item.id === product.id);
  
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...existingProduct,
                quantity: existingProduct.quantity + (product.quantity > 0 ? product.quantity : 0),
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  };

  const images = [
    "/assets/image-product-1.jpg",
    "/assets/image-product-2.jpg",
    "/assets/image-product-3.jpg",
    "/assets/image-product-4.jpg",
  ];

  return (
    <div className="container">
      <Header
        isNavListOpen={isNavListOpen}
        setIsNavListOpen={setIsNavListOpen}
        toggleCart={toggleCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
      />
      <div className="cartWrapper">
        <Cart
          cartItems={cartItems}
          isCartOpen={isCartOpen}
          clearCartItem={clearCartItem}
        />
      </div>
      <ProductPage images={images} addToCart={addToCart} setIsCartOpen={setIsCartOpen}/>
    </div>
  );
};

export default App;

/* 
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
*/
