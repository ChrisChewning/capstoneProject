import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
// import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import firebase, { auth, provider } from 'firebase';
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
     // items: [],
     user: null,  //login is set to null onLoad.
   }
   // this.user = firebase.auth().currentUser.uid;
}

// var userUID;
// var user = firebase.auth().currentUser();
//
// if (user)
//   userUID = user.uid


// componentDidMount() {
//   async getUid => {
//         let user = await firebase.auth().currentUser;
//         let uid = await user.uid;
//         this.setState({uid: uid});
// }
//   // const users = firebase.database().ref('users');
//   // users.on('value', (snapshot) => { //overview of notepad in db.
//   //   let uid = snapshot.val(); //listener
//   //     this.setState({uid: uid})
// }


componentDidMount(){
  this.userId = firebase.auth().currentUser.uid
  async getUid => {
          let user = await firebase.auth().currentUser;
}
}

// componentDidMount() {
//    firebase.auth().onAuthStateChanged((user) => {  //since onAuthStatedChanged() is asynchronouse like most firebase calls, you need a callback. that is (user)
//      if (user != null) {
//        var user = firebase.auth().currentUser.uid; //if user isn't null, user is currentUser.
//         this.setState({user: user}) //now this.state.user is the .uid
//      } else {
//        this.setState({user: null});
//      }
//    });
//
// }




login(){
    auth.signInWithPopup(provider)
        .then(firebase.auth().onAuthStateChanged((user) => {  //since onAuthStatedChanged() is asynchronouse like most firebase calls, you need a callback. that is (user).
        if (user != null) {
          // async getUid => { doesnt let you log in.
          var user = firebase.auth().currentUser.uid; //if user isn't null, user is currentUser.
          this.userid = user.id;
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
  // console.log('this is auth:', auth);
  console.log("this is user:", this.state.user);
  // console.log("this is auth.uid:", auth.uid);
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
