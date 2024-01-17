import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider flex items-center justify-center">
      <button onClick={handlePrev} className="text-8xl slider-button mr-4">
        &#x2190;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="border-4 rounded-3xl border-teal-950 overflow-hidden relative"
      />
      <button onClick={handleNext} className="text-8xl slider-button ml-4">
        &#x2192;
      </button>
    </div>
  );
};

export default ImageSlider;
