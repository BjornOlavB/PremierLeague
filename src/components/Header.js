import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Navbar appearance="standard">
          <Nav>            
            <Nav.Item as={Link} to="/">
              Home
            </Nav.Item>
            <Nav.Item as={Link} to="/settings">
              Settings
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
