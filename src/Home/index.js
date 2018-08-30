import React, { Component } from 'react';
// import { GoogleLogin } from 'react-google-login';
import Login from '../Login';
import Logout from '../Logout';
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
        <div className='googleBtns' id="firebaseui-auth-container"></div>
        <img className='homeImg' src="https://source.unsplash.com/daily?nature/" />
      </div>
        <br/>
        <div className='googleBtns'>
          <div>
        < Login />
      </div>
        <div className='logoutBtn'>
        < Logout />
      </div>
      </div>
      </div>
  )
}
}

export default Home;
