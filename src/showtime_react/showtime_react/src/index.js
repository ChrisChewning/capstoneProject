import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


//1. takes the virutal DOM node created by extends Component & adds it to the actual DOM. 2 arguments: component, DOM element we want to append it to.
//2. don't forget to wrap App inside of BrowserRouter here instead of wrapping it in your app.js file.

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
