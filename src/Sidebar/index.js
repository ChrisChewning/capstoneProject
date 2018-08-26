import React, {Component} from 'react';


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

    <div className={this.state.toggle ? 'sidebarContainer': 'hiddenText'} onClick={this.toggle}>
  <div className={this.state.toggle ? 'toggleSidebar' : 'active'}
                   onClick={this.toggle}>
    <span></span>
    <span></span>
    <span></span>
</div>
    <ul>
      <li>Home</li>
      <li>To-Do List</li>
      <li>Notepad</li>
    </ul>
</div>
)}

}

export default SideBar;
