import React, { Component } from 'react';
import AuthButtons from '../AuthButtons';
import Moment from 'react-moment';

class Home extends Component {
// https://momentjs.com/
// https://www.npmjs.com/package/react-moment
  render() {
    var date = new Date();
    console.log(date);
    console.log(this.props);
    // console.log('this.props: ', this.props);
    // console.log(this.state.authenticated, 'authenticated');
    return(
      <div>
        <Moment format="dddd, MMMM Do" className='homeDate'></Moment>
      <div className='homeWrapper'>
        <img className='homeImg' src="https://source.unsplash.com/daily?nature/" />
      </div>
        <br/>
         <div className='googleBtns'>
        {/* <AuthButtons /> */}
        <div className="wrapperButtons">
        {this.props.user ?
          <button className='logs' onClick={this.props.onLogoutClick}>Log Out</button>
          :
          <button className='logs' onClick={this.props.onLoginClick}>Log In</button>
        }

      </div>
      </div>

      </div>

  )
}
}

export default Home;
