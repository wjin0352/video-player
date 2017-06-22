import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="blue lighten-1">
      <div className="nav-wrapper">
        <Link id="home_link" className='home_link brand-logo waves-light center btn btn-large z-depth-2' to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Header;
