import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Main = () =>{
  return(<div>
    <App/>
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Main/>
  </div>
);

