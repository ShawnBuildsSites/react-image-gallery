import React, { useState } from "react";
import ArtGallery from "./ArtGallery";
import ModelsGallery from "./ModelsGallery";

function Splash() {
  const [currentApp, setCurrentApp] = useState('ArtGallery');
  const switchApp = () => {
    setCurrentApp((prevApp) => (prevApp === 'ArtGallery' ? 'ModelsGallery' : 'ArtGallery'));
  }

  return (
    <div>
      <button className="full-w-btn" onClick={switchApp}>
        Switch to {currentApp === 'ArtGallery' ? 'ModelsGallery' : 'ArtGallery'}
      </button>
      {currentApp === 'ArtGallery' ? <ArtGallery /> : <ModelsGallery />}
    </div>
  )
}

export default Splash;