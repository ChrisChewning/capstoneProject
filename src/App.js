import React, { Component } from 'react';
import './App.css';
// import firebase from 'firebase';
import firebase, { auth, provider }  from './FirebaseConfig';
import { connect } from 'react-firebase';
import {Route, Redirect, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Notepad from './Notepad';
import ToDoList from './ToDoList';
import Calculator from './Calculator';

class App extends Component {

  constructor() {
   super();
   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this);
   this.state = {
     currentItem: '',
     username: '',
     user: null,  //login is set to null onLoad.
   }
 }

  login() {
      auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        if (result) {
          this.setState({user: result.user})
        }
      }
    )
}
      //     .then(firebase.auth().onAuthStateChanged((user) => {  //since onAuthStatedChanged() is asynchronouse like most firebase calls, you need a callback. that is (user).
      //     if (user != null) {
      //       // async getUid => { doesnt let you log in.
      //       var user = firebase.auth().currentUser.uid; //if user isn't null, user is currentUser.
      //       // this.userid = user.id;
      //        this.setState({user: user}) //now this.state.user is the .uid
      //      // }
      //     } else {
      //       this.setState({user: null});
      //     }
      //   })
      // )}



  logout() {
    auth.signOut()
      .then(() => {
        this.setState({user: null});
      });
  }

  render(){
    console.log(this.state.user);
    return (
      <div>
        <Sidebar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Home
              onLoginClick={this.login}
              onLogoutClick={this.logout}
              user={this.state.user}
            />}
          />
          <Route
            exact
            path='/home'
            render={() => <Home
              onLoginClick={this.login}
              onLogoutClick={this.logout}
              user={this.state.user}
            />}
          />

          <Route exact path='/to-dos'
            render={() => <ToDoList
              onLoginClick={this.login}
              onLogoutClick={this.logout}
              user={this.state.user}/>}
            />

          <Route exact path='/notepad' component = {Notepad} />



          <Route exact path='/calculator' component = {Calculator} />
        </Switch>
      </div>
    );
  }
}

export default App;
