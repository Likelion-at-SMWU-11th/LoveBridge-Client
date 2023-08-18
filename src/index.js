import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from '../src/component/ui/ScrollToTop.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);