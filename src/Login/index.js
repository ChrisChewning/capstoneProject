import React, { Component } from 'react';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from 'react-google-login';
// import { fire, GoogleProvider } from './App';


class Login extends Component {
  render() {
//     authWithGoogle=()=>{
//   fire.auth().signInWithPopup(googleProvider)
//     .then((result,error) => {
//       if(error){
//         console.log('unable to signup with firebase')
//       } else {
//         this.setState({authenticated: true })
//       }
//     })
// }
    return(
   <GoogleLogin
     buttonText="Logn"
     // onLogoutSuccess={logout}
   >
   </GoogleLogin>
)
};
}
export default Login;
