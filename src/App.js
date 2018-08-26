import React, { Component } from 'react';
import './App.css';

// import { Route, Redirect, Switch } from 'react-router-dom';
import {Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Notepad from './Notepad';
import ToDoList from './ToDoList';




class App extends Component {
  render() {
    return (
      <div>
        < Sidebar />
        {/* < ToDoList /> */}

        <Switch>
          <Route exact path='/home' componenet = {Home} />
          <Route exact path="/to-dos" component = {ToDoList} />
          <Route exact path='/notepad' component = {Notepad} />
        </Switch>


      </div>
    );
  }
}






export default App;
