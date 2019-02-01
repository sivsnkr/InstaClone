import React,{Component} from "react";
import { connect } from "react-redux";
import {RenderPost} from "../components/renderPosts";
import {fetchPosts,deletePost} from "../store/actions/posts";
export class PostTime extends Component{
    componentDidMount(){
        this.props.fetchPosts(this.props.user.userDetail._id);
    }
    render(){
        const {post,deletePost} = this.props;
        const {username,_id} = this.props.user.userDetail;
        const posts = post.map(post=>{
            return <RenderPost 
                key={post._id}
                Id={_id}
                pId={post._id}
                url={post.url}
                username={username}
                likes={post.likes.length}
                comments={post.comments.length}
                creator={post.creator}
                caption={post.caption}
                deletePost = {deletePost}
                />
        })
        return(
            <div className="all-post">
                {posts}
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

export default connect(mapStateToProps,{fetchPosts,deletePost})(PostTime);