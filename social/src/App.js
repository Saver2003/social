import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='https://www.freelogodesign.org/Content/img/logo-samples/celtica.png' alt="logo"/>
      </header>
      <nav className="nav">
        <div><a href="/">Profile</a></div>
        <div><a href="/">Messages</a></div>
        <div><a href="/">News</a></div>
        <div><a href="/">Music</a></div>
        <div><a href="/">Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.guideposts.org/sites/guideposts.org/files/styles/slideshow_grid_view/public/slide1_12.jpg" alt="main theme"/>
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
