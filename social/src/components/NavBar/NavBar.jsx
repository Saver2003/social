import React from 'react';
import style from './NavBar.module.css';

let classActive = `${style.item} ${style.active}`;
let noActive = `${style.item}`;

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_main}>
        <div className={classActive}><a href="/">Profile</a></div>
        <div className={noActive}><a href="/">Messages</a></div>
        <div className={noActive}><a href="/">News</a></div>
        <div className={noActive}><a href="/">Music</a></div>
      </div>
      <div className={noActive}><a href="/">Settings</a></div>
    </nav>
  );
};

export default NavBar;