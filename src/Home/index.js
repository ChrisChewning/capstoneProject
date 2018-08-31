import React, { Component } from 'react';
// import { GoogleLogin } from 'react-google-login';
import Login from '../Login';
import AuthButtons from '../Logout';
import Moment from 'react-moment';

class Home extends Component {
// https://momentjs.com/
// https://www.npmjs.com/package/react-moment
  render() {
    var date = new Date();
    console.log(date);
    return(
      <div>
        <Moment format="dddd, MMMM Do" className='homeDate'></Moment>
      <div className='homeWrapper'>
        <div id="firebaseui-auth-container"></div>
        <img className='homeImg' src="https://source.unsplash.com/daily?nature/" />
      </div>
        <br/>

         <div className='googleBtns'>
        <AuthButtons />
      </div>
        {/* < Login /> */}
      </div>
         /* <div className='logoutBtn'>
        < Logout />
      </div> */
      // </div>
  )
}
}

export default Home;
