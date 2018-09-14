import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import firebaseui from 'firebaseui';
import firebase, { auth, provider }  from '../FirebaseConfig';
import Home from '../Home';

//LINK https://firebase.google.com/docs/auth/web/google-signin


class AuthButtons extends Component {
  constructor() {
   super();
   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this);
   this.state = {
     currentItem: '',
     username: '',
     user: true,  //login is set to null onLoad.
   }
}



login(){
    auth.signInWithPopup(provider)
        .then(firebase.auth().onAuthStateChanged((user) => {  //since onAuthStatedChanged() is asynchronouse like most firebase calls, you need a callback. that is (user).
        if (user != null) {
          // async getUid => { doesnt let you log in.
          var user = firebase.auth().currentUser.uid; //if user isn't null, user is currentUser.
          // this.userid = user.id;
           this.setState({user: user}) //now this.state.user is the .uid
         // }
        } else {
          this.setState({user: null});
        }
      })
    )}



logout() {
  auth.signOut()
    .then(() => {
      this.setState({user: null});
    });
}


render() {
  console.log("this is user:", this.state.user);
  return(
  <div className="wrapperButtons">
  {this.state.user ?
    <button className='logs' onClick={this.logout}>Log Out</button>
    :
    <button className='logs' onClick={this.login}>Log In</button>
  }
</div>
)}
}

export default AuthButtons;
