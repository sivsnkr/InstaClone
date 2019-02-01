import React,{Component} from "react";
import {FetchAllUsers} from "../store/actions/currentUser";
import {connect} from "react-redux";
import { runInThisContext } from "vm";
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
                    {
                        this.props.user.userDetail.following.indexOf(user._id) > 0?(
                            <button className="btn btn-danger">Unfollow</button>
                        ):(<button className="btn btn-success">Follow</button>)
                    }
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

const mapStateToProps = function(state){
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps,null)(AllUsers);