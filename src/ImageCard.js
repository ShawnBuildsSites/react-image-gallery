import React from "react";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className="image-card">
      <img src={image.src} alt={image.title} onClick={() => onImageClick(image)} />
      <p><strong>{image.title}</strong></p>
      <div className="categories">
        {image.categories.length > 0 ? (
          image.categories.map((category, i) => (
            <span key={i} className="category-pill">{category}</span>
          ))
        ) : (<span>Add a category</span>)}
      </div>
    </div>
  );
}

export default ImageCard;