/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Header(props) {
  return (
    <nav className= 'header blue darken-4'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/YZDmitriy">Repo</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;
