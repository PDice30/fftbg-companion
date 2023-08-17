import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OverlayProvider } from './contexts/OverlayContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <OverlayProvider>
    <App />
  </OverlayProvider>
)
