import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import Store from './redux/Stores/Store.jsx'
import '../src/components/components_styles.css';
import App from './App.jsx';
import { BrowserRouter as Router, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <>
  <Provider store ={Store}>
      <StrictMode>
          <Router>
          <App />
        </Router>
      </StrictMode>
  </Provider> 
  </>
)
