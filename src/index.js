import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './style/App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

