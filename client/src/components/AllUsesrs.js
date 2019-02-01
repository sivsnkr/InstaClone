import React from "react";
import {FetchAllUsers} from "../store/actions/currentUser";
export const AllUsers = function(){
    var users = FetchAllUsers();
    users = users.map(user=>{
        return(
            <div className="single-user">
                <h4>{user}</h4>
                <button className="btn btn-primary">Follow</button>
            </div>
        )
    })
    return (
        <div>
            {users}
        </div>
    )
}