import React ,{Component} from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import {MessageForm} from "../components/MessageForm";
import {PostForm} from "../components/PostForm";
import {HomePage} from "../components/HomePage";
import {AllUsers} from "../components/AllUsesrs";
import {Authenticate} from "../store/actions/currentUser";
import {AuthForm} from "../components/AuthForm";
import {fetchPosts,addNewPost} from "../store/actions/posts";
import {SentMessages} from "../components/sentMessages";
import {RecivedMessages} from "../components/recivedMessages";

export class Main extends Component{
    render(){
        const{Authenticate,user,fetchPosts,addNewPost} = this.props;
        const isAuthenticate = user.isAuthenticated;
        return(
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} isAuthenticated={isAuthenticate}/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm heading="Sign Up" {...props} fetchPosts={fetchPosts} Authenticate={Authenticate}/>}/>
                <Route exact path="/signin" render={(props)=><AuthForm heading="Sign In" {...props} fetchPosts={fetchPosts} Authenticate={Authenticate}/>}/>
                <Route exact path="/new_message" render={(props)=><MessageForm {...props}/>}/>
                <Route exact path="/new_post" render={(props)=><PostForm {...props} addNewPost={addNewPost} id={user.userDetail._id}/>}/>
                <Route exact path="/sent_messages" render={(props)=><SentMessages/>}/>
                <Route exact path="/recived_messages" render={(props)=><RecivedMessages/>}/>
                <Route exact path="/all_users" render={(props)=><AllUsers/>}/>
            </Switch>
        )
    }
}
const mapStateToProps = function(state){
    return {
        user: state.user,
    }
}

export default withRouter(connect(mapStateToProps,{Authenticate,fetchPosts,addNewPost})(Main));