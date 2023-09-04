import { useContext } from 'react';
import { OverlayContext } from './contexts/OverlayContext';
import { Header } from './components/Header';
import Overlay from './components/Overlay';
import { useWindowSize } from 'usehooks-ts';
import { AllowButton } from './components/AllowButton';

// TODO: Dagger and Swords and possibly other items have distorted images
// TODO: Better overall error handling

const App = () => {
  const { width, height } = useWindowSize();
  const { isButtonVisible, setIsButtonVisible, allowOverlay, setTextSize } = useContext(OverlayContext);

  if (!allowOverlay) {
    return (
      <div className='w-screen h-screen'
        onMouseOver={() => { setIsButtonVisible(true); }}
        onMouseLeave={() => { setIsButtonVisible(false); }}>
          { isButtonVisible && 
            <AllowButton />
          }
      </div>
    )
  }

  // Twitch video player is too small
  if (width < 1000 || height < 600) {
    return (
      <Header />
    )
  }

  if      (width > 1400 && height > 800) setTextSize('text-2xl');
  else if (width > 1250 && height > 680) setTextSize('text-xl');
  else if (width > 1000 && height > 600) setTextSize('text-lg');

  return (
    <Overlay />
  )
}

export default App;
