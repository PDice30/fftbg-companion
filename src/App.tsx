import { createContext, useState } from 'react';
import Overlay from './components/Overlay';
import defaultUnit from './data/defaultUnit';
import UnitContextType from './contexts/UnitContext';
import React from 'react';
import { Unit } from './models';

// TODO: Minimum Height and width of document, otherwise: Display a message they need to adjust

export const UnitContext = createContext<UnitContextType>({
  unit: defaultUnit,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-empty-function
  setUnit: () => {},
});

const App = () => {

  const [unit, setUnit] = useState(defaultUnit);

  console.log(import.meta.env);
  // // TODO: Use effect to track window changes?
  // // Could also grab root Length/ Height?
  // if (window.location.href !== 'http://localhost:8080/') {
  //   const videoPlayer = document.getElementsByClassName('video-player__overlay')[0];
  //   if (videoPlayer && (videoPlayer.clientWidth < 600 || videoPlayer.clientHeight < 400)) {
  //     console.log(videoPlayer.clientWidth);
  //     console.log(videoPlayer.clientHeight);
  //     console.log('Video Player too small');
  //     return (
  //       <div>
  //         Please adjust your browser size!  
  //       </div>
  //     )
  //   }
  // }

  // if (window.innerWidth < 600 ||  window.innerHeight < 400) {
  //   console.log('Overlay extension too small');
  //   return (
  //     <div>
  //       Please adjust your browser size!
  //     </div>
  //   )
  // }
  

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      <Overlay />
    </UnitContext.Provider>
    
  )
}

export default App;
