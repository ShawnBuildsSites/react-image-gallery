import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';
import data from './images.json';


function App() {
  const [filters, setFilters] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => { setImages(data); }, []);

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

  return (
    <div className='App'>
      <h1>Image Gallery</h1>
      <div className='filters'>
        <p>Select categories to filter</p>
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={filters.includes(category) ? 'active' : ''}
          >{category}</button>
        ))}
      </div>
      {filteredImages.length === 0 ? (
        <p style={{ color: 'red' }}><em>No images found for the selected categories.</em></p>
      ) : (<ImageGallery images={filteredImages} />)}
    </div>
  );
}
export default App;