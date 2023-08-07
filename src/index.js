import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function app() {
  const list = ['oge', 'bolu', 'phebe', 'runke'];
  const randin = Math.floor(Math.random() * list.length);
  return list[randin];
  
  // return (
  //   <div className='container'>
  //     <h1>

  //     </h1>
  //   </div>
  // )





}
document.appendChild(app)