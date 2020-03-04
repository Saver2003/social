import React from 'react';
import style from "../Dialogs.module.css";

const Message = props => {
  return (
    <div className={style.message}>
      <div className={style.ava}>
        <p className={style.name}>{props.name}</p>
        <img src={props.avatar} alt="avatar"/>
      </div>
      <p className={style.msg}>- {props.msg}</p>
    </div>
  );
};

export default Message;