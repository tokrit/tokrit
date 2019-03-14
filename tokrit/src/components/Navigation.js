import React from 'react';
import './Navigation.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Example extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/" className = "logo">TORKIT</NavbarBrand>
          
          <Collapse navbar>
            
            <Nav className="ml-auto" navbar>
              <NavItem className = "navOption">
                <NavLink href="/announcement">ANNOUNCEMENT</NavLink>
              </NavItem>
              <NavItem className = "navOption">
                <NavLink href="about">ABOUT US</NavLink>
              </NavItem>
              <NavItem className = "navOption">
                <NavLink href="menu">MENU3</NavLink>
              </NavItem>
              <NavItem className = "navOption login_circle">
                <div className = "user_circle">
                    <i className = "far fa-user-circle"></i>
                </div>
              </NavItem>

            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}
