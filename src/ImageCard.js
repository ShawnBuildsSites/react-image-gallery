import React from "react";

const ImageCard = ({ src, title, description, categories }) => {
  return (
    <div className="image-card">
      <img src={src} alt={title} />
      <div className="categories">
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <span key={i} className="category-pill">{category}</span>
          ))
        ) : (<span>Add a category</span>)}
      </div>
      <p><strong>{title}</strong></p>
      <p>{description}</p>
    </div>
  );
}

export default ImageCard;