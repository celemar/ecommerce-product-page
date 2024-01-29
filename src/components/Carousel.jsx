import React from "react";

const Carousel = ({
  images,
  currentIndex,
  prevSlide,
  nextSlide,
  onClick,
  thumbnails,
  className,
  lightboxOpen,
  setLightboxOpen,
}) => {
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="lightbox-section">
      <div className={className}>
        <div className="carousel-wrapper">
          {lightboxOpen && (
            <button
              className="close-lightbox"
              onClick={closeLightbox}
              type="button"
            >
              <svg width="14" height="15"xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  className="closeIcon"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          )}
          <a
            href="#"
            className="prev-button"
            aria-label="previous image"
            onClick={prevSlide}
          >
            <img
              src="/assets/icon-previous.svg"
              alt="previous arrow"
              className="arrow-icon"
            />
          </a>
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            onClick={onClick}
          />
          <a
            href="#"
            className="next-button"
            aria-label="next image"
            onClick={nextSlide}
          >
            <img
              src="/assets/icon-next.svg"
              alt="next arrow"
              className="arrow-icon"
            />
          </a>
        </div>

        <div className="thumbnails-container">{thumbnails}</div>
      </div>
    </section>
  );
};

export default Carousel;
