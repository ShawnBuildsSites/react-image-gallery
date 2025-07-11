import React, { useEffect, useState, useCallback } from "react";
import './App.css';
import './Slideshow.css';
import data from './images.json';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  /* const [fade, setFade] = useState(false); */

  const timer = 10; //time in seconds
  /* const fadeTime = 1000; //time in ms */

  const [countdown, setCountdown] = useState(timer);
  const [isPaused, setIsPaused] = useState(false);
  const [userCountdown, setUserCountdown] = useState(timer);

  useEffect(() => {
    const shuffledData = shuffleArray(data);
    setImages(shuffledData);
  }, []);

  /* const nextSlide = useCallback(() => {
    setFade(false);
    setCountdown(userCountdown);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, fadeTime);
  }, [userCountdown, images.length, fadeTime]); */
  const nextSlide = useCallback(() => {
    setCountdown(userCountdown);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [userCountdown, images.length]);

  useEffect(() => {
    if (images.length > 0 && !isPaused) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            setIsPaused(true);
            setTimeout(() => {
              nextSlide();
              setIsPaused(false);
            }, /* (fadeTime * 2) */ 1000);
            return userCountdown;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000); //decrease every second
      return () => clearInterval(interval);
    }
  }, [images, currentIndex, isPaused, userCountdown, nextSlide]);

  /* const prevSlide = useCallback(() => {
    setFade(false);
    setCountdown(userCountdown);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(true);
    }, fadeTime);
  }, [userCountdown, images.length, fadeTime]); */
  const prevSlide = useCallback(() => {
    setCountdown(userCountdown);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [userCountdown, images.length]);

  const handleCountdownChange = (e) => {
    const newCountdown = Math.max(1, parseInt(e.target.value, 10));
    setUserCountdown(newCountdown);
    setCountdown(newCountdown);
  }

  if (!images.length) { return <p>Loading slideshow&hellip;</p>; }

  return (
    <div className='App'>
      <h1>Slideshow</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2em" }}>
        <button className="slideBtn" onClick={prevSlide}>
          <FaArrowCircleLeft size={32} />
        </button>
        <p>Next image in <span className="countdown">{countdown}</span> seconds</p>
        <div>
          <label htmlFor="countdownInput">Set countdown:</label>
          <input
            id="countdownInput"
            type="number"
            value={userCountdown}
            onChange={handleCountdownChange}
            min="1"
            className="textInput"
          />
        </div>
        <button className="slideBtn" onClick={nextSlide}>
          <FaArrowCircleRight size={32} />
        </button>
      </div>
      <div>
        <img
          /* className={`fade ${fade ? 'fade-enter-active' : 'fade-enter'}`} */
          src={`${process.env.PUBLIC_URL}${images[currentIndex].src}`}
          alt={images[currentIndex].title}
        />
        <p>{images[currentIndex].title}</p>
      </div>
    </div>
  );
}

export default Slideshow;