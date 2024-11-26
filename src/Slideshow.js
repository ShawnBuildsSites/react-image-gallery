import React, { useEffect, useState } from "react";
import './App.css';
import data from './models.json';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Slideshow() {
  const [filters, setFilters] = useState(['Non Nude']);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffledData = shuffleArray(data);
    setImages(shuffledData);
  }, []);

  return (
    <div className='App'>
      <h1>Slideshow</h1>
    </div>
  );
}

export default Slideshow;