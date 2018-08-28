import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const NavBar = () => {
  return (
<Nav className='navBar'>
        <NavItem className='navLink'>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem className='navLink'>
          <NavLink href="/whatElse">Actors' Other Work</NavLink>
        </NavItem>
        <NavItem className='navLink'>
          <NavLink href="/similarshows">Similar Shows</NavLink>
        </NavItem>
        <NavItem className='navLink'>
          <NavLink href='/quotes'>Get a Quote!</NavLink>
        </NavItem>
        <NavItem className='navLink'>
          <NavLink href='/blog'>Blog</NavLink>
        </NavItem>
      </Nav>
)}


export default NavBar;
