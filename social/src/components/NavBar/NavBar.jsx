import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

let classActive = `${style.item} ${style.active}`;
let noActive = `${style.item}`;

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_main}>
        <div className={classActive}>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={noActive}>
          <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
        </div>
        <div className={noActive}>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </div>
        <div className={noActive}>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </div>
      </div>
      <div className={noActive}>
        <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;