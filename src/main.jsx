import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import '../src/components/components_styles.css';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <>
  <Provider store ={store}>
      <StrictMode>
          <Router>
            <Routes>
                    <Route path="/" element={<App/>}/>
             </Routes>
          </Router>
      </StrictMode>
  </Provider> 
  </>
)
