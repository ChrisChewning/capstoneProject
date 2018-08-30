import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';



class Logout extends Component {
  
  render() {
    return(
   <GoogleLogout
     buttonText="Logout"
     // // onLogoutSuccess={logout}
   >
   </GoogleLogout>
)
};
}
export default Logout;
