import React,{Component} from "react";
import {FetchAllUsers} from "../store/actions/currentUser";

export class AllUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    render(){
        FetchAllUsers()
        .then(res=>{
            this.setState({
                users:res,
            })
        })
        const users = this.state.users.map(user=>{
            return(
                <div className="single-user">
                    <h2>{user}</h2>
                    <button className="btn btn-success">Follow</button>
                </div>
            )
        })
        return(
            <div className="all-users">
                {users}
            </div>
        )
    }
}