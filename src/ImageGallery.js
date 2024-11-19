import React from "react";
import ImageCard from './ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map(image => (
        <ImageCard key={image.id} src={image.src} title={image.title} description={image.description} categories={image.categories} />
      ))}
    </div>
  );
};

export default ImageGallery;