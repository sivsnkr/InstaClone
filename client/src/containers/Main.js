import React ,{Component} from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import {MessageForm} from "../components/MessageForm";
import {PostForm} from "../components/PostForm";
import { HomePage } from "../components/HomePage";
import {Authenticate} from "../store/actions/currentUser";
import {AuthForm} from "../components/AuthForm";
import {fetchPosts} from "../store/actions/posts";

export class Main extends Component{
    render(){
        const{Authenticate,user,fetchPosts} = this.props;
        const isAuthenticate = user.isAuthenticated;
        return(
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} isAuthenticated={isAuthenticate} fetchPosts={fetchPosts}/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm heading="Sign Up" {...props} fetchPosts={fetchPosts} Authenticate={Authenticate}/>}/>
                <Route exact path="/signin" render={(props)=><AuthForm heading="Sign In" {...props} fetchPosts={fetchPosts} Authenticate={Authenticate}/>}/>
                <Route exact path="/new_message" render={(props)=><MessageForm {...props}/>}/>
                <Route exact path="/new_post" render={(props)=><PostForm/>}/>
            </Switch>
        )
    }
}
const mapStateToProps = function(state){
    return {
        user: state.user,
    }
}

export default withRouter(connect(mapStateToProps,{Authenticate,fetchPosts})(Main));