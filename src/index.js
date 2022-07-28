import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Teste from '../src/Teste'
import Footer from './pages/Footer';
import Main from './pages/Main';
import Nvbar from './pages/nvbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nvbar />  
    <Main />
    <Footer />    
  </React.StrictMode>
);


reportWebVitals();
