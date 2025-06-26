import React, { useState } from "react";
import AppSwitcher from "./AppSwitcher";
import ArtGallery from "./ArtGallery";
import Slideshow from "./Slideshow";

const apps = {
  ArtGallery: <ArtGallery />,
  Slideshow: <Slideshow />
};

function Splash() {
  const [currentApp, setCurrentApp] = useState('ArtGallery');

  return (
    <div>
      <AppSwitcher currentApp={currentApp} onAppChange={setCurrentApp} />
      {apps[currentApp]}
    </div>
  )
}

export default Splash;