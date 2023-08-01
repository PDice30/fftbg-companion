import { Header } from './components/Header';
import Overlay from './components/Overlay';
import { PanelProvider } from './contexts/PanelContext';
import { useWindowSize } from 'usehooks-ts';

// TODO: Minimum Height and width of document, otherwise: Display a message they need to adjust
const App = () => {
  const { width, height } = useWindowSize();

  console.log(`Window Width: ${width}, Window Height: ${height}`);
  
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

export default App
