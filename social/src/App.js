import React from 'react';
import './App.css';

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
      <footer>
        <p>some footer</p>
      </footer>
    </div>
  );
}

export default App;
