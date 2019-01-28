import React from "react";

export const RenderPost = function(props){
    const {url,username,likes,comments} = props;
    return(
        <div className="singlePost">
            <div className="post-header">{username}</div>
            <img src={url}/>
            <div className="post-bottom">
                <div>{likes} Likes</div>
                <div>{comments} Comments</div>
            </div>
        </div>
    )
}