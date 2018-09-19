import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { BrowserHistory } from 'react';
import registerServiceWorker from './registerServiceWorker'; //offline or slow connection.



ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
