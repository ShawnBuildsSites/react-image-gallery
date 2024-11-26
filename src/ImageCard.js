import React from "react";

const ImageCard = ({ image, onImageClick, toggleFilter }) => {
  return (
    <div className="image-card">
      <img src={`${process.env.PUBLIC_URL}${image.src}`} alt={image.title} onClick={() => onImageClick(image)} />
      <p><strong>{image.title}</strong></p>
      <div className="categories">
        {image.categories.length > 0 ? (
          image.categories.map((category) => (
            <span
              key={category}
              className="category-pill"
              onClick={(e) => {
                e.stopPropagation();
                toggleFilter(category)
              }}
            >{category}</span>
          ))
        ) : (<span>Add a category</span>)}
      </div>
    </div>
  );
}

export default ImageCard;