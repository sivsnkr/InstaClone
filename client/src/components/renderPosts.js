import React,{Component} from "react";

export class RenderPost extends Component{
    render(){
        const {url,username,creator,caption,likes,comments} = this.props;
        return(
            <div className="singlePost">
                <div className="post-header"><h5>{creator}</h5></div>
                <img className="img-post" src={url} alt={username}/>
                <div className="caption">{caption}</div>
                <button className="btn btn-block btn-danger">Delete</button>
                <div className="post-bottom">
                    <div style={{marginRight:"40px"}}>{likes} <strong>Likes</strong></div>
                    <div>{comments}<strong> Comments</strong></div>
                </div>
            </div>
        )
    }
}