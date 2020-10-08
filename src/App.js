import React, {useState} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import {Modal} from "@material-ui/core";
import LoginModal from "./Components/LoginModal/LoginModal";

function App() {
    const [posts,setPosts] = useState([
        {
        username:'butterchicken',
        imageUrl:'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2020/05/flutter-mobile-web-desktop-768x432.jpg',
        caption:'Wow it works'
     },{
        username: 'ssssangha',
        imageUrl: 'https://www.jocooks.com/wp-content/uploads/2014/09/beer-can-chicken-1-7.jpg',
        caption: 'yummm'
     },{
            username: 'rafehqazi',
            imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagne-recipe-3-main-square.jpg?w=500&h=375&crop=1',
            caption: 'Not pakistani'
        }
    ])

    const [open,setOpen] = useState(false)

    const handleOpenState = ()=>{
        setOpen(false)
    }

  return (
    <div className="app">
      <NavBar/>
        <button onClick={e=> setOpen(true)}>Sign Up</button>
        <Modal open={open} onClose={handleOpenState}>
           <LoginModal handleOpenState={handleOpenState}/>
        </Modal>
      <div className="posts">
          {
              posts.map(post => (<Post imageUrl={post.imageUrl} caption={post.caption} username={post.username}/>))
          }
      </div>
    </div>
  );
}

export default App;
