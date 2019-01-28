import React ,{Component} from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import { HomePage } from "../components/HomePage";
import {Authenticate} from "../store/actions/currentUser";
import {AuthForm} from "../components/AuthForm";

export class Main extends Component{
    render(){
        const{Authenticate,user} = this.props;
        const isAuthenticate = user.isAuthenticated;
        return(
            <Switch>
                <Route exact path="/" render={(props)=><HomePage {...props} isAuthenticated={isAuthenticate}/>}/>
                <Route exact path="/signup" render={(props)=><AuthForm heading="Sign Up" {...props} Authenticate={Authenticate}/>}/>
                <Route exact path="/signin" render={(props)=><AuthForm heading="Sign In" {...props} Authenticate={Authenticate}/>}/>
                <Route exact path="/new_message" render={(props)=><MessageForm/>}/>
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

export default withRouter(connect(mapStateToProps,{Authenticate})(Main));