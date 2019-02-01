import React,{Component} from "react";
import { connect } from "react-redux";
import {RenderPost} from "../components/renderPosts";
import {fetchPosts} from "../store/actions/posts";
export class PostTime extends Component{
    componentDidMount(){
        this.props.fetchPosts(this.props.user.userDetail._id);
    }
    render(){
        const {post} = this.props;
        const {username} = this.props.user.userDetail;
        const posts = post.map(post=>{
            return <RenderPost 
                key={post._id}
                url={post.url}
                username={username}
                likes={post.likes.length}
                comments={post.comments.length}
                creator={post.creator}
                caption={post.caption}
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

export default connect(mapStateToProps,{fetchPosts})(PostTime);