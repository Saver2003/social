import React from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = props => {
  console.log(props);
  return (
    <NavLink to={`/dialogs/${props.id}`} className={`${props.active ? style.dialog_active : style.dialog_link}`}>
      <div className={`${style.dialog} + ' ' + ${props.active ? style.active : ''}`}>
        <div>
          <div className={style.point}>{''}</div>
        </div>
        {props.name}
      </div>
    </NavLink>
  );
};

export default Dialog;