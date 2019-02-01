import React,{Component} from "react";
import {FetchAllUsers} from "../store/actions/currentUser";
import {connect} from "react-redux";
import {handle_followAnd_unfollow} from "../store/actions/currentUser";
import {RenderUser} from "../components/renderUser";
export class AllUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    handleClick = (e,id)=>{
        e.preventDefault();
        this.props.handle_followAnd_unfollow(e.target.name,id,e.target.value)
        .then(res=>{
        })
    }
    componentDidMount(){
        FetchAllUsers()
        .then(res=>{
            let users = res.filter(user=>user.id!==this.props.user.userDetail._id);
            this.setState({
                users,
            })
        })
    }
    render(){
        const users = this.state.users.map(user=>{
            const {id,username} = user;
            return(
                <RenderUser
                key={id}
                id={id}
                username={username}
                following={this.props.user.userDetail.following}
                _id={this.props.user.userDetail._id}
                handleClick={this.handleClick}
                />
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

export default connect(mapStateToProps,{handle_followAnd_unfollow})(AllUsers);