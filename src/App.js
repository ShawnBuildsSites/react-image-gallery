import React, { useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';


function App() {
  const [filters, setFilters] = useState([]);
  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/300?text=Nature1',
      category: ['nature'],
      title: 'Beautiful Mountain',
      description: 'A scenic mountain view.'
    }, {
      id: 2,
      src: 'https://via.placeholder.com/300?text=Animals1',
      category: ['animals'],
      title: 'Cute Dog',
      description: 'A cute puppy playing.'
    }, {
      id: 3,
      src: 'https://via.placeholder.com/300?text=Nature2',
      category: ['nature'],
      title: 'Forest Path',
      description: 'A peaceful forest trail.'
    }, {
      id: 4,
      src: 'https://via.placeholder.com/300?text=Animals2',
      category: ['animals'],
      title: 'Funny Cat',
      description: 'A cat wearing glasses'
    }, {
      id: 5,
      src: 'https://via.placeholder.com/300?text=Tech1',
      category: ['tech'],
      title: 'Laptop',
      description: 'A sleek modern laptop.'
    }, {
      id: 6,
      src: 'https://via.placeholder.com/300?text=Tech2',
      category: ['tech'],
      title: 'Smartphone',
      description: 'The latest smartphone model.'
    }, {
      id: 7,
      src: 'https://via.placeholder.com/300?text=Nature+Tech',
      category: ['nature', 'tech'],
      title: 'Wood-panel CPU',
      description: 'Merging nature and tech.'
    }, {
      id: 8,
      src: 'https://via.placeholder.com/300?text=Animals+Tech',
      category: ['animals', 'tech'],
      title: 'Monkey',
      description: 'Silly monkey hanging from tree.'
    }
  ];

  const toggleFilter = (category) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category);
      } else {
        return [...prevFilters, category];
      }
    });
  };

  //const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);
  const filteredImages = filters.length === 0
    ? images
    : images.filter((image) => filters.every((filter) => image.category.includes(filter)));

  return (
    <div className='App'>
      <h1>Image Gallery</h1>
      <div className='filters'>
        <p>Select categories to filter</p>
        <button onClick={() => toggleFilter('nature')} className={filters.includes('nature') ? 'active' : ''}>Nature</button>
        <button onClick={() => toggleFilter('animals')} className={filters.includes('animals') ? 'active' : ''}>Animals</button>
        <button onClick={() => toggleFilter('tech')} className={filters.includes('tech') ? 'active' : ''}>Tech</button>
      </div>
      <ImageGallery images={filteredImages} />
    </div>
  );
}
export default App;