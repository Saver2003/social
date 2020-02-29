import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-main">
        <div><a href="/">Profile</a></div>
        <div><a href="/">Messages</a></div>
        <div><a href="/">News</a></div>
        <div><a href="/">Music</a></div>
      </div>
      <div><a href="/">Settings</a></div>
    </nav>
  );
};

export default NavBar;