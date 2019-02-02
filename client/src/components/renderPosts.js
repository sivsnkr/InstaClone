import React,{Component} from "react";

export class RenderPost extends Component{
    render(){
        const {url,username,creator,caption,likes,comments,deletePost,pId,Id,likeAndUnlikePost} = this.props;
        return(
            <div className="singlePost">
                <div className="post-header"><h5>{creator}</h5></div>
                <img className="img-post" src={url} alt={username}/>
                <div className="caption">{caption}</div>
                <button className="btn btn-block btn-danger" onClick={()=>deletePost(Id,pId)}>Delete</button>
                <div className="post-bottom">
                    <div style={{marginRight:"40px"}}>{likes.length}<strong>Likes</strong></div>
                    <div>{comments}<strong> Comments</strong></div>
                </div>
                <div className="like-comment">
                    {likes.indexOf(Id)>=0?
                    (<div className="like"><button onClick={(e)=>likeAndUnlikePost(e,pId,Id)} className="btn btn-danger" name="unlike">UnLike</button></div>):
                    (<div className="like"><button onClick={(e)=>likeAndUnlikePost(e,pId,Id)} className="btn btn-success" name="like">Like</button></div>)
                    }
                    <div className="comment"><button className="btn btn-primary disabled">Comment</button></div>
                </div>
            </div>
        )
    }
}