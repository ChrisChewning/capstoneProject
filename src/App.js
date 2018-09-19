import React, { Component } from 'react';
import './App.css';
// import firebase from 'firebase';
import firebase, { auth, provider, db}  from './FirebaseConfig';
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
   // this.register = this.register.bind(this);

   this.state = {
     currentItem: '',
     username: '',
     user: null,  //login is set to null onLoad.
     uid: '',
     email: '',
     password: '',
     notes: '',
   }
}

// persists your log in over refresh or route change.
componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => { //listener
    if (user) {
        // uid = user.uid;
      this.setState({user});
      this.setState({uid: user.uid}); //authentication for db rules.
      // firebase.ref(`users/${id}`).set({
    // user.uid
  // });
    }
  });
}



// // register(){
// register(e){
//   e.preventDefault()
//   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
// }


  login() {
      auth.signInWithPopup(provider)
      .then((result) => {
        // this.props.users.push(note);
        console.log(result);
        // user.getToken();
        if (result) {
          this.setState({user: result.user});
          // this.setState({notes: this.props.notesRef})

          const usersRef = firebase.database().ref('users'); //Listener.
          const userData = {
            email: result.user.email,
          }
          usersRef.push(userData);
        }
      }
    )
}


  logout() {
    auth.signOut()
      .then(() => {
        this.setState({user: null});
      });
  }

  render(){
    console.log(this.state.user);
    console.log(this.state.uid);
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
            render={(props) => <ToDoList
              onLoginClick={this.login}
              onLogoutClick={this.logout}
              user={this.state.user}
              uid={this.state.uid}
            />}
            />

          <Route exact path='/notepad'
            render={() => <Notepad
              onLoginClick={this.login}
              onLogoutClick={this.logout}
              user={this.state.user}
              uid={this.state.uid}
            />}
            />

          <Route exact path='/calculator' component = {Calculator} />
        </Switch>
      </div>
    );
  }
}

export default App;
