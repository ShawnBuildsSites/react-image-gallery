import React from "react";

const ImageCard = ({ src, title, description }) => {
  return (
    <div className="image-card">
      <img src={src} alt={title} />
      <p><strong>{title}</strong></p>
      <p>{description}</p>
    </div>
  );
}

export default ImageCard;