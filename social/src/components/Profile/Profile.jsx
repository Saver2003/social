import React from 'react';
import NewPost from "./NewPost/NewPost";
import Person from "./Person/Person";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  let postData = [
    { id: 1, text: "Hello, i'm here", likes: 12},
    { id: 2, text: "I'm learning React!", likes: 15},
    { id: 3, text: "And Redux", likes: 7},
  ];

  let post = postData.map(el => {
    return <MyPosts id={el.id} key={el.id} postText={el.text} likeCounts={el.likes}/>
  });

  return (
    <div className={style.content}>
      <div className="image_cover">
        <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg"
             alt="main theme" className={style.main_img}/>
      </div>
      <Person/>
      <NewPost/>
      {post}
    </div>
  );
};

export default Profile;