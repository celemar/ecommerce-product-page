import React, { useEffect, useState } from "react";

const Header = ({
  isNavListOpen,
  setIsNavListOpen,
  toggleCart,
  cartItems,
  isCartOpen,
  setIsCartOpen,
}) => {
  const toggleNavList = () => {
    setIsNavListOpen(!isNavListOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  const darkFilterStyles = {
    content: "",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    pointerEvents: "none",
    visibility: isNavListOpen && windowWidth <= 768 ? "visible" : "hidden",
  };

  const categories = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <header>
      <div className="header-left">
        <button
          onClick={toggleNavList}
          className="menu-btn"
          aria-label="Open Menu"
          type="button"
        >
          <img
            src="/assets/icon-menu.svg"
            width={18}
            height={15}
            alt="Menu Icon"
            className="menu-icon"
          />
        </button>

        <img src="/assets/logo.svg" alt="logo" className="logo" />
        <div className="nav-wrapper">
          <nav
            className={`menu ${
              isNavListOpen && windowWidth < 768 ? "menu-visible" : ""
            }`}
          >
            <button className="close-btn" onClick={toggleNavList} type="button">
              <img
                src="/assets/icon-close.svg"
                alt="Close Icon"
                width={18}
                height={18}
              />
            </button>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="menu-item">
                  {category}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {isNavListOpen && <div style={darkFilterStyles}></div>}
      <div className="header-right">
        <button
          className="toggle-cart"
          aria-label="toggle cart"
          onClick={toggleCart}
          onMouseEnter={() => {
            windowWidth > 768 && setIsCartOpen(true);
          }}
          type="button"
        >
          <svg
            className={`cart-icon ${isCartOpen ? "active" : ""}`}
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="changeColor"
              fillRule="nonzero"
            />
          </svg>
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
        <img
          src="/assets/image-avatar.png"
          className="avatar"
          alt="avatar"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default Header;
