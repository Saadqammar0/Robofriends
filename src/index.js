import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';



import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />

  </div>
);



/* ReactDOM.render(
  <div>
  </div>
, document.getElementById('root'));
*/

reportWebVitals();
