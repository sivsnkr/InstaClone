import React,{Component} from "react";
import { connect } from "react-redux";
import {RenderPost} from "../components/renderPosts";
import {fetchPosts,deletePost,likeAndUnlikePost} from "../store/actions/posts";
export class PostTime extends Component{
    componentDidMount(){
        this.props.fetchPosts(this.props.user.userDetail._id);
    }
    likeAndUnlikePost = (e,p_id,id)=>{
        e.preventDefault();
        //some action will go here
        this.props.likeAndUnlikePost(id,p_id,e.target.name);
    }
    render(){
        let {post,deletePost} = this.props;
        const {username,_id,following} = this.props.user.userDetail;
        post = post.filter(post=>{
            if(following.indexOf(post.creator)>=0||_id===post.creator){
                return true;
            }
            else{
                return false;
            }
        });
        const posts = post.map(post=>{
            return <RenderPost 
                key={post._id}
                Id={_id}
                pId={post._id}
                url={post.url}
                username={username}
                likes={post.likes}
                comments={post.comments.length}
                creator={post.creator}
                caption={post.caption}
                deletePost = {deletePost}
                likeAndUnlikePost={this.likeAndUnlikePost}
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

export default connect(mapStateToProps,{fetchPosts,deletePost,likeAndUnlikePost})(PostTime);