import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <div className="posts">
          <Post/>
      </div>
    </div>
  );
}

export default App;
