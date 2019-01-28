import React,{Component} from "react";
import { connect } from "react-redux";
import {RenderPost} from "../components/renderPosts";
export class PostTime extends Component{
    render(){
        const {post} = this.props;
        const {username} = this.props.user.userDetail;
        const posts = post.filter(post=>{
            if(post.id !== null){
                return <RenderPost 
                key={post.id}
                url={post.url}
                username={username}
                likes={post.likes.length}
                commens={post.comments.length}
                />
            }
        })
        return(
            <div>
                {posts.length > 0?(
                    <div>{posts}</div>
                ):(
                    <h1>There is No Posts</h1>
                )}
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return{
        user: state.user,
        post: state.post,
    }
}

export default connect(mapStateToProps,null)(PostTime);