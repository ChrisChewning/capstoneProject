import React, {Component} from 'react';
import Moment from 'react-moment';

class Home extends Component {
  render() {
    var date = new Date();
    console.log(date);
    console.log(this.props.user);
    return (<div>
      <Moment format="dddd, MMMM Do" className='homeDate'></Moment>
      <div className='homeWrapper'>
        <img className='homeImg' src="https://source.unsplash.com/daily?nature/"/>
      </div>
      <br/>
      <div className='googleBtns'>
        {/* <AuthButtons /> */}
        <div className="wrapperButtons">
          {
            this.props.user
              ? <button className='logs' onClick={this.props.onLogoutClick}>Log Out</button>
              : <button className='logs' onClick={this.props.onLoginClick}>Log In</button>
          }
        </div>
      </div>

    </div>)
  }
}

export default Home;
