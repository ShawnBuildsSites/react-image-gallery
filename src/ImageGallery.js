import React from "react";
import ImageCard from './ImageCard';

const ImageGallery = ({ images, onImageClick, toggleFilter }) => {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <ImageCard
          key={i}
          image={image}
          onImageClick={onImageClick}
          toggleFilter={toggleFilter}
        />
      ))}
    </div>
  );
};

export default ImageGallery;