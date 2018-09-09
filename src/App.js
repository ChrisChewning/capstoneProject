import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { connect } from 'react-firebase';
import {Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Notepad from './Notepad';
import ToDoList from './ToDoList';
import Calculator from './Calculator';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        < Sidebar />
        <Switch>
          <Route exact path='/home' component = {Home} />
          <Route exact path="/to-dos" component = {ToDoList} />
          <Route exact path='/notepad' component = {Notepad} />
          <Route exact path='/calculator' component = {Calculator} />
        </Switch>
      </div>
    );
  }
}




export default App;
