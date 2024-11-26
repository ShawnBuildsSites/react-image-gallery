import React from "react";

function AppSwitcher({ currentApp, onAppChange }) {
  const apps = ['ArtGallery', 'ModelsGallery', 'Slideshow'];
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

  const getPreviousApp = () => {
    const currentIndex = apps.indexOf(currentApp);
    return apps[(currentIndex - 1 + apps.length) % apps.length];
  }

  return (
    <div>
      <button className="half-w-btn" onClick={() => switchApp('previous')}>
        &larr; {getPreviousApp()}
      </button>
      <button className="half-w-btn" onClick={() => switchApp('next')}>
        {getNextApp()} &rarr;
      </button>
    </div>
  )
}

export default AppSwitcher;