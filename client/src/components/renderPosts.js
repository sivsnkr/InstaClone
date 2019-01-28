import React,{Component} from "react";

export class RenderPost extends Component{
    render(){
        const {url,username,likes,comments} = this.props;
        return(
            <div className="singlePost">
                <div className="post-header">{username}</div>
                <img src={url} alt={username}/>
                <div className="post-bottom">
                    <div>{likes} Likes</div>
                    <div>{comments} Comments</div>
                </div>
            </div>
        )
    }
}