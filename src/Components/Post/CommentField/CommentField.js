import React, {useEffect, useState} from "react";
import './CommentField.css'
import {db} from "../../../firebase";

function CommentField({postId,username}) {

    const [comment,setComment] = useState('')
    const [disabled,setDisabled] = useState(true)

    useEffect(()=>{
        if (comment===''){
            setDisabled(true)
        }else {
            setDisabled(false)
        }
    },[comment])

    const postComment = (event)=>{
        event.preventDefault();

        db
            .collection('posts')
            .doc(postId)
            .collection('comments')
            .add({
                text: comment,
                username: username
            })
            .catch(err=>{
            console.log('error',err)
        })

        setComment('')
    }

    return (
        <div className="commentField">
            <form onSubmit={postComment}>
                <input value={comment} onChange={e=> setComment(e.target.value)} className='comment-input' type="text" placeholder='Add a comment...'/>
                <button disabled={disabled} className='post-comment-button' type="submit">Post</button>
            </form>
        </div>
    )
}

export default CommentField