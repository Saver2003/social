import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id}
                                                                 name={d.name}
                                                                 key={d.id}/>);

  let messagesElements = props.state.messages.map(m => <Message id={m.id}
                                                                key={m.id}
                                                                name={m.name}
                                                                avatar={m.avatar}
                                                                msg={m.message}/>);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;