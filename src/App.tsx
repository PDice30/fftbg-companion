import { Header } from './components/Header';
import Overlay from './components/Overlay';
import { PanelProvider } from './contexts/PanelContext';
import { useWindowSize } from 'usehooks-ts';


/**
 * TODO: Raidboss icon
 * TODO: Bold(?) abilities or items that are Notable
 */
const App = () => {
  const { width, height } = useWindowSize();
  
  if (width < 1420 || height < 800) {
    return (
      <Header />
    )
  }
  
  return (
    <PanelProvider>
      <Overlay />
    </PanelProvider>
  )
}

export default App;
