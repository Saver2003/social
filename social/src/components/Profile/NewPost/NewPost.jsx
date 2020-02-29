import React from 'react';
import style from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={style.posts}>
      <h4>My posts</h4>
      <textarea className={style.text_area}/>
      <button className={style.send_button}>Add post</button>
    </div>
  );
};

export default NewPost;