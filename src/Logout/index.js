import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
// import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import firebase, { auth, provider } from 'firebase';
import firebase, { auth, provider }  from '../Fire';

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
   }
}


handleChange(e) {
  /* ... */
}
logout() {
  // we will add the code for this in a moment, but need to add the method now or the bind will throw an error
}
login() {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}


logout() {
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

//OPTION 1
  // logOut=()=> {
  //   firebase.auth().signOut().then((user)=> {
  //     this.setState({items:null})
  //   })
  // }


  // OPTION 2
  //https://firebase.google.com/docs/auth/web/google-signin
    // firebase.auth().signOut().then(function() {
    //   // Sign-out successful.
    // }).catch(function(error) {
    //   // An error happened.
    // });



render() {
  return(
  <div className="wrapper">
    {/* <GoogleLogin
      buttonText="Login"
</GoogleLogin> */}
  {this.state.user ?
    <button onClick={this.logout}>Log Out</button>
    :
    <button onClick={this.login}>Log In</button>
  }
</div>
)}



//   render() {
//     return(
//    <GoogleLogout
//
//      buttonText="Logout" logOut onClick={this.logOut} //or just logOut ?
//
//      //OPTION 2: onLogoutSuccess={logout}
//    >
//    </GoogleLogout>
// )
// };
}
export default AuthButtons;
