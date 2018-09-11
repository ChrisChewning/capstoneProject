import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
// import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import firebase, { auth, provider } from 'firebase';
import firebase, { auth, provider }  from '../FirebaseConfig';

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
   }
}


handleChange(e) {
  /* ... */
}

login() {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({user});
    });
}

logout() {
  auth.signOut()
    .then(() => {
      this.setState({user: null});
    });
}


render() {
  return(
  <div className="wrapperButtons">
    {/* <GoogleLogin
      buttonText="Login"
</GoogleLogin> */}
  {this.state.user ?
    <button className='logs' onClick={this.logout}>Log Out</button>
    :
    <button className='logs' onClick={this.login}>Log In</button>
  }
</div>
)}


/* <div className="wrapper">
  {/* <GoogleLogin
    buttonText="Login"
</GoogleLogin> */

// {this.state.user ?
//   <GoogleLogin buttonText="login" onClick={this.logout}>Log Out</GoogleLogin>
//   :
//   <GoogleLogout buttonText="logout" onClick={this.login}>Log In</GoogleLogout>
// }
// </div>
// )}


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
