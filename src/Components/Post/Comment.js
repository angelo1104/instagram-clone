import React from "react";
import './Post.css'

function Comment({username, text}) {
    return (
        <div className="comment">
            <p className='caption'><strong className='caption-username'>{username}</strong> {text}</p>
        </div>
    )
}

export default Comment;