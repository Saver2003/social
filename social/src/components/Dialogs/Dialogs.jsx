import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Elena'}
  ];

  let messages = [
    {
      id: 0,
      name: 'Alex',
      message: 'Hi',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
    },
    {
      id: 1,
      name: 'Dasha',
      message: 'How are you',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
    },
    {
      id: 2,
      name: 'Alex',
      message: 'File',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s'
    },
  ];

  let dialog = dialogsData.map(el => {
    return <DialogItem id={el.id} name={el.name} key={el.id}/>
  });

  let message = messages.map(el => {
    return <Message id={el.id} key={el.id} name={el.name} avatar={el.avatar} msg={el.message}/>
  });

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        {dialog}
      </div>
      <div className={style.messages}>
        {message}
      </div>
    </div>
  );
};

export default Dialogs;