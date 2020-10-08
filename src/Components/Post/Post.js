import React from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";

function Post({username,imageUrl,caption}) {
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
        </div>
    )
}

export default Post