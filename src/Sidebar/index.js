import React, {Component} from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';


class SideBar extends Component {
constructor(){
  super();
    this.state = {
      toggle: false,
  }
}

toggle() {
   this.setState({toggle: !this.state.toggle});
 }

// const handleClick = () => {
//   e.preventDefault();
//   this.setState(toggle: true);
//   console.log('the sidebar was clicked');
// }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }



render() {
  return (
    <div className='sidebarContainer'>
  <div className='toggleSidebar'>
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
