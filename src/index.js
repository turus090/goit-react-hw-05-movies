import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import bg from './components/bg.jpg'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <img className='bg' src={bg} alt="bg"/>
    <App />
    </>
  
);
