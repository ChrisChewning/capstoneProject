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
     items: [],
     user: null,  //login is set to null onLoad.
     authenticated: null,
     // uid: null,
   }
   // this.userId = firebase.auth().currentUser.uid
}

// var userUID;
// var user = firebase.auth().currentUser();
//
// if (user)
//   userUID = user.uid


// componentDidMount() {
//   const users = firebase.database().ref('users');
//   users.on('value', (snapshot) => { //overview of notepad in db.
//     let notepadNotes = snapshot.val(); //listener
//       this.setState({notepad: notepadNotes.notepad})
// })
// }


componentDidMount() {
    // const users = firebase.database().ref('users'); //listener for users
    // users.on('value', (snapshot) => {

   firebase.auth().onAuthStateChanged((user) => {  //Listener
     if (user != null) {  //if user isn't null, user is currentUser.
       var user = firebase.auth().currentUser;
       var uid;
        uid = user.uid;
        this.setState({user: true})
       // auth.uid = firebase.auth().currentUser.uid;
       this.setState({uid: auth.uid });
       // var userUID;
       // userUID = user.uid
       // auth.uid = this.state.uid;
     } else {
       this.setState({user: false});
     }
   });

}



login() {
  auth.signInWithPopup(provider)
    .then((result) => {
      // const user = result.user;
      this.setState({user: true});
    });
}

logout() {
  auth.signOut()
    .then(() => {
      this.setState({user: null, uid: null});
    });
}


render() {
  // console.log('this is auth:', auth);
  console.log("this is auth.uid:", auth.uid);
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
