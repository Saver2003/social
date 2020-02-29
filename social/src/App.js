import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='https://www.freelogodesign.org/Content/img/logo-samples/celtica.png'/>
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg"/>
        </div>
        <div>ava + description</div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
}

export default App;
