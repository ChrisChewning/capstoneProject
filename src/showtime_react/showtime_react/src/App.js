import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import QuoteRandomizer from './QuoteRandomizer';
import './App.css';
import './index.css';
import NavBar from './Nav';
import Error from './Error';
import Welcome from './Welcome';
import Similar from './Similar';
// import WhatElse from './WhatElse';
import Shows from './Shows';
import CommentBox from './CommentBox';
// import { Button } from 'reactstrap';

class App extends Component {


render() {

  return (
    <div>

  < NavBar />
  {/* < CommentBox /> */}

  {/* < Shows /> */}

    <Switch>
      <Route exact path='/' component = {Welcome} />
      <Route exact path='/whatelse' component = {Shows} />
      <Route exact path='/quotes' component = {QuoteRandomizer}/>
      <Route exact path='/similarshows' component= {Similar} />
      <Route exact path='/blog' component = {CommentBox} />
      <Route path='*' component = {Error} />
      <Redirect from='*' to = '/home' />
    </Switch>


    </div>
  )
}

}


export default App;
