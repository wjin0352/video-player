import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, ButtonGroup, Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="navbar" bsStyle='inverse'>
        <Navbar.Header>
          <Navbar.Brand>
            Social Media Blog
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link className='home_link' to="/">Home</Link>
          </NavItem>
        </Nav>
      </Navbar>
  );
}

export default Header;
