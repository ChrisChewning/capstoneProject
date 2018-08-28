import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { connect } from 'react-firebase';

// import { Route, Redirect, Switch } from 'react-router-dom';
import {Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Notepad from './Notepad';
import ToDoList from './ToDoList';
import Notes from './Notes';
import Calendar from './Calendar';

  {/* // Initialize Firebase */}
  const config = {
      apiKey: "AIzaSyAzFb_TW6s_2DvByFaZrwUpLKIC7rHc10Y",
      authDomain: "capstone-chewning.firebaseapp.com",
      databaseURL: "https://capstone-chewning.firebaseio.com",
      projectId: "capstone-chewning",
      storageBucket: "capstone-chewning.appspot.com",
      messagingSenderId: "240236777398"
  };
  firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div>
        < Sidebar />
        {/* < Notes /> */}
        {/* < ToDoList /> */}

        <Switch>
          <Route exact path='/home' componenet = {Home} />
          <Route exact path="/to-dos" component = {ToDoList} />
          <Route exact path='/notepad' component = {Notepad} />
          <Route exact path='/calendar' component = {Calendar} />
        </Switch>


      </div>
    );
  }
}






export default App;
