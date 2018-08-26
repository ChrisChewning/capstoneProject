import React, {Component} from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';


class SideBar extends Component {
constructor(){
  super();
  this.toggle = this.toggle.bind(this); //what does this mean? doesnt work without it.
    this.state = {
      toggle: false,
  }
}

//Change the state.
toggle() {
   this.setState({toggle: !this.state.toggle});
   console.log('toggle function working:', this.state.toggle);
 }





// render() {
//   const sidebarHidden = () => {
//     if (this.state.toggle === false) {
//
//     } else {
//
//     }
//   }


render(){
  return (

    <div className={this.state.toggle ? 'hiddenText': 'sidebarContainer'} onClick={this.toggle}>
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
