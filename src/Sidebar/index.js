import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
constructor(){
  super();
  this.toggle = this.toggle.bind(this);
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
    <div className={this.state.toggle ? 'sidebar': 'hiddenText'} onClick={this.toggle}>
    <div className={this.state.toggle ? 'open' : 'closed'}
                   onClick={this.toggle}>
    <h6></h6>
    <h6></h6>
    <h6></h6>
</div>

    <ul>
      <li><Link to='/home' className=''>Home</Link></li>
      <li><Link to='/to-dos' className=''>To-Do List</Link></li>
      <li><Link to='/notepad' className=''>Notepad</Link></li>
      <li><Link to='/calculator' className=''>Calculator</Link></li>
    </ul>
</div>
</div>
)}
}

export default SideBar;
