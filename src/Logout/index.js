import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
// import App from '.App.js';


class Logout extends Component {


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
   <GoogleLogout

     buttonText="Logout" logOut onClick={this.logOut} //or just logOut ?

     //OPTION 2: onLogoutSuccess={logout}
   >
   </GoogleLogout>
)
};
}
export default Logout;
