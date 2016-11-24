import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Button, ButtonGroup, Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header-navbar" bsStyle='inverse'>
      <Navbar.Header>
        <Navbar.Brand>
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
