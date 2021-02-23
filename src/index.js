import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
// import App from './App';
// import Header from './Header';
// import Boot from './Boot.js';
// import Ttt from '../src/tt/Ttt';
// import Bbb from '../src/tt/Bbb';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  

    {/* <App />
    <Header />
    <Boot />
    <Ttt />
    <Bbb /> */}
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
