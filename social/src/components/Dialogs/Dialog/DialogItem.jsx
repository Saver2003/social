import React from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
  let path = `/dialogs/${props.id}`;
  return (
    <NavLink to={path} className={`${props.active ? style.dialog_active : style.dialog_link}`}>
      <div className={`${style.dialog} + ' ' + ${props.active ? style.active : ''}`}>
        <div>
          <div className={style.point}>{''}</div>
        </div>
        {props.name}
      </div>
    </NavLink>
  );
};

export default DialogItem;