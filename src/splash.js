import React, { useState } from "react";
import AppSwitcher from "./AppSwitcher";
import ArtGallery from "./ArtGallery";
import ModelsGallery from "./ModelsGallery";
import Slideshow from "./Slideshow";

const apps = {
  ArtGallery: <ArtGallery />,
  ModelsGallery: <ModelsGallery />,
  Slideshow: <Slideshow />
};

function Splash() {
  const [currentApp, setCurrentApp] = useState('ModelsGallery');

  return (
    <div>
      <AppSwitcher currentApp={currentApp} onAppChange={setCurrentApp} />
      {apps[currentApp]}
    </div>
  )
}

export default Splash;