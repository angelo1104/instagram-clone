import React from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";

function Post() {
    return (
        <div className="post">
            <div className="post-user-info">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQxynR0au3GxpY2NG-hzNfVxnYBXymuIyRyw&usqp=CAU"/>
                <h3>@butterchicken</h3>
            </div>
            <img className='post-main-image' src="https://www.inovex.de/blog/wp-content/uploads/2019/01/Flutter-1-1.png" alt=""/>

            <div className="post-about">
                <p className='caption'><strong className='caption-username'>@butterchicken</strong> Let's gooooooooooooo</p>
            </div>
        </div>
    )
}

export default Post