import React from 'react';
import style from "./MyPosts.module.css";

const MyPosts = props => {
  return (
    <div>
      <div className={style.post_wrapper}>
        <div className={style.my_post}>
          <div className={style.ava}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"
              alt=""/>
          </div>
          <p>{props.postText}</p>
        </div>
        <div className={style.like}>
          <span className={style.like_hover}>like </span><span><strong>{props.likeCounts}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;