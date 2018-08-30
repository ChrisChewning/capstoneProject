import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class SideBar extends Component {
constructor(){
  super();
  this.toggle = this.toggle.bind(this); //what does this mean? doesnt work without it.
    this.state = {
      toggle: false,
  }
}

toggle() {
   this.setState({toggle: !this.state.toggle});
   console.log('toggle function working:', this.state.toggle);
 }

render(){
  return (

    <div className="wrapper">

      {/* this div needs everything in it? */}
    <div className={this.state.toggle ? 'sidebarContainer': 'hiddenText'} onClick={this.toggle}>


{/* this open & closed div needs the burger in it. */}
  <div className={this.state.toggle ? 'open' : 'closed'}
                   onClick={this.toggle}>
    <span></span>
    <span></span>
    <span></span>
</div>

    <ul>
      <li><Link to='/home' className=''>Home</Link></li>
      <li><Link to='/to-dos' className=''>To-Do List</Link></li>
      <li><Link to='/notepad' className=''>Notepad</Link></li>
      <li><Link to='/calendar' className=''>Calendar</Link></li>
    </ul>
</div>
</div>
)}

}

export default SideBar;
