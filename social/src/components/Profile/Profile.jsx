import React from 'react';
import NewPost from "./NewPost/NewPost";
import Person from "./Person/Person";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={style.content}>
      <div className="image_cover">
        <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg"
             alt="main theme" className={style.main_img}/>
      </div>
      <Person/>
      <NewPost/>
      <MyPosts postText={"Hello, i'm here"} likeCounts={15}/>
      <MyPosts postText={"I'm learning React!"} likeCounts={20}/>
    </div>
  );
};

export default Profile;