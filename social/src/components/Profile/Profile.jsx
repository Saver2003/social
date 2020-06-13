import React from 'react';
import NewPost from "./NewPost/NewPost";
import Person from "./Person/Person";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  let postsElements = props.state.postData.map(p => <MyPosts id={p.id} key={p.id} postText={p.text} likeCounts={p.likes}/>);

  return (
    <div className={style.content}>
      <div className="image_cover">
        <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg"
             alt="main theme" className={style.main_img}
        />
      </div>
      <Person/>
      <NewPost/>
      {postsElements}
    </div>
  );
};

export default Profile;