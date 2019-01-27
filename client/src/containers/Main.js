import React from "react";
import {connect} from "react-redux";
import {Route,withRouter,Switch} from "react-router-dom";
import { HomePage } from "../components/HomePage";
import {AuthForm} from "../components/AuthForm";

export const Main = function(props){
    return(
        <Switch>
            <Route exact path="/" render={(props)=><HomePage/>}/>
            <Route exact path="/signup" render={(props)=><AuthForm heading="Sign Up"/>}/>
            <Route exact path="/signin" render={(props)=><AuthForm heading="Sign In"/>}/>
        </Switch>
    )
}
const mapStateToProps = function(state){
    return {
        //all the required states will be here
    }
}

export default withRouter(connect(mapStateToProps,null)(Main));