import React, { useState } from "react";
import Carousel from "./Carousel";

const ProductPage = ({ images, addToCart, setIsCartOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const openLightbox = () => {
    if (window.innerWidth > 768) {
      setLightboxOpen(true);
      setIsCartOpen(false)
    }
  };
  
  const thumbnails = images.map((image, index) => (
    <img
      key={index}
      className={`thumbnail ${currentIndex === index ? 'selected' : ''}`}
      src={image}
      alt={`Thumbnail ${index + 1}`}
      onClick={() => setCurrentIndex(index)}
    />
  ));

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const product = {
    id: currentIndex,
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: quantity,
    image: images[0],
  };

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(0);
  };

  return (
    <section className="product-page">
      <div className="page-left">
        <Carousel
          images={images}
          currentIndex={currentIndex}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          onClick={openLightbox}
          thumbnails={thumbnails}
          className="image-carousel"
        />
      </div>
      <div className="page-right">
        <div className="page-info">
          <span>Sneaker Company</span>
          <h1>{product.name}</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="page-price">
          <div className="actual-price">
            <span className="price">${product.price}.00</span>
            <span className="discount">50%</span>
          </div>
          <div className="original-price">
            <span>$250.00</span>
          </div>
        </div>
        <div className="page-btns">
          <div className="quantity-counter">
            <button
              onClick={decrement}
              id="decrement"
              aria-label="Decrease quantity"
              type="button"
            >
              <img
                src="/assets/icon-minus.svg"
                className="minus"
                alt="decrement icon"
              />
            </button>
            <span>{quantity}</span>
            <button
              onClick={increment}
              id="increment"
              aria-label="Increase quantity"
              type="button"
            >
              <img
                src="/assets/icon-plus.svg"
                className="plus"
                alt="increment icon"
              />
            </button>
          </div>
          <div className="addCart-wrapper">
            <button
              id="add-to-cart"
              onClick={handleAddToCart}
              aria-label="add to cart"
              type="button"
            >
              <img
                src="/assets/icon-cart.svg"
                className="cart-icon2"
                alt="cart icon"
              />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <div className={`lightbox ${lightboxOpen ? 'lightbox-open' : ''}`}>    
          <Carousel
            images={images}
            currentIndex={currentIndex}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            onClick={openLightbox}
            thumbnails={thumbnails}
            className="lightbox-carousel"
            lightboxOpen={lightboxOpen}
            setLightboxOpen={setLightboxOpen}
          />
        </div>
      )}
    </section>
  );
};

export default ProductPage;
