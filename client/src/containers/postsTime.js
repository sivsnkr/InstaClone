import React,{Component} from "react";
import { connect } from "tls";
import {RenderPost} from "../components/renderPosts";
export class PostTime extends Component{
    render(){
        const {post} = this.post;
        const {username} = this.props.user.userDetail;
        const posts = post.map(post=>{
            return <RenderPost 
                key={post.id}
                url={post.url}
                username={username}
                likes={post.likes.length()}
                commens={post.comments.length()}
                />
        })
        return(
            {posts}
        )
    }
}

const mapStateToProps = function(state){
    return{
        user: state.user,
        posts: state.post,
    }
}

export default connect(mapStateToProps,null)(PostTime);