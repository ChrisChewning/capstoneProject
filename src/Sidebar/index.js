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
    <div className={this.state.toggle ? 'sidebarContainer': 'hiddenText'} onClick={this.toggle}>
  <div className={this.state.toggle ? 'toggleSidebar' : 'active'}
                   onClick={this.toggle}>
    <span></span>
    <span></span>
    <span></span>
</div>
    <ul>
      <li><Link to='home'>Home</Link></li>
      <li><Link to='/to-dos'>To-Do List</Link></li>
      <li><Link to='/notepad'>Notepad</Link></li>
      <li><Link to='calendar'>Calendar</Link></li>
    </ul>
</div>
</div>
)}

}

export default SideBar;
