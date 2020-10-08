import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import {Button, Modal} from "@material-ui/core";
import LoginModal from "./Components/LoginModal/LoginModal";
import {auth, db} from "./firebase";
import ImageUpload from "./Components/ImageUpload/ImageUpload";

function App() {
    const [posts,setPosts] = useState([])
    const [login,setLogin] = useState(false)
    const [open,setOpen] = useState(false)
    const [user,setAuthUser] = useState(null)

    const handleOpenState = ()=>{
        setOpen(false)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(currentAuthUser=>{
            if (currentAuthUser){
                setAuthUser(currentAuthUser)
            }else {
                setAuthUser(null)
            }
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    useEffect(()=>{
        db
            .collection('posts')
            .orderBy('timeStamp',"desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(post=> {
                    return {
                        username : post.data()?.username,
                        imageUrl: post.data()?.imageUrl,
                        caption : post.data()?.caption
                    }
                }))
            })
    },[])

    const logout = ()=>{
        auth.signOut()
    }

  return (
    <div className="app">
      <NavBar/>
        {
            user?.displayName ? <ImageUpload username={user.displayName}/>:
                <h3>Sorry you need an account to upload posts.</h3>
        }
        {
            user?
            <Button onClick={logout}>Logout</Button>:
                <div className="loginButtons">
                    <Button onClick={e=> {
                        setLogin(false)
                        setOpen(true)
                    }}>Sign Up</Button>
                    <Button onClick={e=> {
                        setLogin(true)
                        setOpen(true)
                    }}>Login</Button>
                </div>
        }

        <Modal open={open} onClose={handleOpenState}>
           <LoginModal login={login} handleOpenState={handleOpenState}/>
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
