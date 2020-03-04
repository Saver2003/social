import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <Dialog id={1} name="Alex" active="active" />
        <Dialog id={2} name="Dasha" />
        <Dialog id={3} name="Max" />
        <Dialog id={4} name="Elena" />
      </div>
      <div className={style.messages}>
        <Message name="Alex" msg="Hi" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"/>
        <Message name="Dasha"  msg="How are you" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"/>
        <Message name="Alex"  msg="Yo" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"/>
        {/*<div className={style.message}>*/}
        {/*  <div className={style.ava}>*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"/>*/}
        {/*  </div>*/}
        {/*  <p>Hi</p>*/}
        {/*</div>*/}
        {/*<div className={style.message}>How are you</div>*/}
        {/*<div className={style.message}>Yo</div>*/}
      </div>
    </div>
  );
};

export default Dialogs;