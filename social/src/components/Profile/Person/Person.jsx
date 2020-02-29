import React from 'react';
import style from "./Person.module.css";

const Person = () => {
  return (
    <div className={style.ava_wrapper}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"
        alt="ava" className={style.avatar}/>
      <div className={style.ava_info}>
        <div className={style.user_name}>
          <p>Alex G.</p>
        </div>
        <div className={style.personal_info}>
          <p>Date of Birth: 4 february</p>
          <p>City: Bishkek</p>
          <p>Education: Attractor school JS-2</p>
        </div>
      </div>
    </div>
  );
};

export default Person;