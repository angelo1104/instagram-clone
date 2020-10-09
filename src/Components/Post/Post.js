import React, {useEffect, useState} from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";
import {auth, db} from "../../firebase";
import Comment from "./Comment";
import CommentField from "./CommentField/CommentField";

function Post({username,imageUrl,caption,id}) {

    const [comments,setComments] = useState([])

    useEffect(()=>{
        db
            .collection('posts')
            .doc(id)
            .collection('comments')
            .onSnapshot(snapshot => {
                setComments(
                    snapshot.docs.map(comment=>{
                        return ({
                            username: comment.data().username,
                            text: comment.data().text,
                            id: comment.id
                        })
                    })
                )
            })
    })

    return (
        <div className="post">
            <div className="post-user-info">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQxynR0au3GxpY2NG-hzNfVxnYBXymuIyRyw&usqp=CAU"/>
                <h3>{username}</h3>
            </div>
            <img className='post-main-image' src={imageUrl} alt=""/>

            <div className="post-about">
                <p className='caption'><strong className='caption-username'>{username}</strong> {caption}</p>
            </div>

            <div className="post-about comments">
                {comments.map((comment)=>(
                    <Comment username={comment.username} text={comment.text} key={comment.id}/>
                ))}
            </div>

            {auth.currentUser && <CommentField postId={id} username={username}/>}
        </div>
    )
}

export default Post