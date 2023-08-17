import { useContext } from 'react';
import { OverlayContext } from './contexts/OverlayContext';
import { Header } from './components/Header';
import Overlay from './components/Overlay';
import { useWindowSize } from 'usehooks-ts';
import { AllowButton } from './components/AllowButton';

// TODO: Dagger and Swords and possibly other items have distorted images
// TODO: Better overall error handling
// TODO: Bows or a unit with "Two Hands" support should show a two handed equipment slot icon

const App = () => {
  const { width, height } = useWindowSize();
  const { isButtonVisible, setIsButtonVisible, allowOverlay } = useContext(OverlayContext);

  if (!allowOverlay) {
    return (
      <div className='w-screen h-screen'
        onMouseOver={() => {
          setIsButtonVisible(true);
        }}
        onMouseLeave={() => {
          setIsButtonVisible(false);
        }}>
          {isButtonVisible && 
            <AllowButton />
          }
      </div>
    )
  }

  if (width < 1300 || height < 730) {
    return (
      <Header />
    )
  }

  return (
    <Overlay />
  )
}

export default App;
