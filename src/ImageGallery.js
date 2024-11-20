import React from "react";
import ImageCard from './ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <ImageCard
          key={i}
          image={image}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGallery;