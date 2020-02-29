import React from 'react';

const Profile = () => {
  return (
    <div className="content">
      <div className="image-cover">
        <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg"
             alt="main theme" className="main-img"/>
      </div>
      <div className="ava-wrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOJeQgJS1vwCJ6tj4-OAvWRl8c7IrnRRk7lKLxyBMnJVcVDl5&s"
          alt="ava" className="avatar"/>
        <div>
          <div className="user-name">
            <p>Alex G.</p>
          </div>
          <div className="personal-info">
            <p>Date of Birth: 4 february</p>
            <p>City: Bishkek</p>
            <p>Education: Attractor school JS-2</p>
          </div>
        </div>
      </div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div>post 1</div>
      <div>post 2</div>
    </div>
  );
};

export default Profile;