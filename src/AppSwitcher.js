import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AppSwitcher({ currentApp, onAppChange }) {
  const apps = ['ArtGallery', 'Slideshow'];
  const switchApp = (direction) => {
    onAppChange((prevApp) => {
      const currentIndex = apps.indexOf(prevApp);
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % apps.length
          : (currentIndex - 1 + apps.length) % apps.length;
      return apps[nextIndex];
    });
  }

  const getNextApp = () => {
    const currentIndex = apps.indexOf(currentApp);
    return apps[(currentIndex + 1) % apps.length];
  }

  /* const getPreviousApp = () => {
    const currentIndex = apps.indexOf(currentApp);
    return apps[(currentIndex - 1 + apps.length) % apps.length];
  } */

  const redirectToURL = (url) => {
    window.location.href = url;
  }

  return (
    <div>
      <button className="half-w-btn" onClick={() => redirectToURL('https://shawngraydesign.com/project/react-based-art-gallery')}>
        <FaChevronLeft /> Back to ShawnGrayDesign.com
      </button>
      <button className="half-w-btn" onClick={() => switchApp('next')}>
        {getNextApp()} <FaChevronRight />
      </button>
    </div>
  )
}

export default AppSwitcher;