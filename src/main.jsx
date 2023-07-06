import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ScoreProvider } from './context/scoreProvider.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScoreProvider>
    <App />
  </ScoreProvider>
)
