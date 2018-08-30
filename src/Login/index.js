import React, { Component } from 'react';
// import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


class Login extends Component {
  render() {
    return(
   <GoogleLogout
     buttonText="Login"
     // onLogoutSuccess={logout}
   >
   </GoogleLogout>
)
};
}
export default Login;
