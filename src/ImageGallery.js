import React from "react";
import ImageCard from './ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, i) => (
        <ImageCard key={i} src={image.src} title={image.title} categories={image.categories} />
      ))}
    </div>
  );
};

export default ImageGallery;