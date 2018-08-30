import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


{/* <Router history={customHistory}>
    <div>
        <Route path="/login" component={Login}/>
        <Route path="/app/home" component={Home}/>
        <Redirect from="/" to="/login"/>
    </div>
</Router> */}


ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
