import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}

export default Nav;
