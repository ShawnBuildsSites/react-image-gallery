import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';
import data from './images.json';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function ArtGallery() {
  const [filters, setFilters] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffledData = shuffleArray(data);
    setImages(shuffledData);
  }, []);

  const toggleFilter = (category) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category);
      } else {
        return [...prevFilters, category];
      }
    });
  };

  const uniqueCategories = [...new Set(images.flatMap((image) => image.categories))].sort();

  const filteredImages = filters.length === 0
    ? images
    : images.filter((image) => filters.every((filter) => image.categories.includes(filter)));

  const openPopover = (image) => { setSelectedImage(image); }
  const closePopover = () => { setSelectedImage(null); }

  return (
    <div className='App'>
      <h1>Art Gallery</h1>
      <p>Select categories to filter</p>
      <div className='categories'>
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={`category-pill ${filters.includes(category) ? 'active' : ''}`}
          >{category}</button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <p style={{ color: 'red' }}><em>No images found for the selected categories.</em></p>
      ) : (
        <ImageGallery
          images={filteredImages}
          onImageClick={openPopover}
          toggleFilter={toggleFilter}
        />
      )}

      {selectedImage && (
        <div className={`popover ${selectedImage ? 'show' : ''}`} onClick={closePopover}>
          <div className='popover-content' onClick={(e) => e.stopPropagation()}>
            <img src={`${process.env.PUBLIC_URL}${selectedImage.src}`} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
            <button className='close-button' onClick={closePopover}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ArtGallery;