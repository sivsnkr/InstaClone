import React,{Component} from "react";
import { connect } from 'react-redux';


class UserProfile extends Component{
    render(){
        const {username,followers,following,profiePic} = this.props.currentUser.userDetail;
        return(
            <div className="userProfile">
                <img src={""} alt={username}></img>
                <div className="userProfile-body">
                    <div>Username: {username}</div>
                    <div>Followers: {followers}</div>
                    <div>Following: {following}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return{
        currentUser:state.user,
    }
}

export default connect(mapStateToProps,null)(UserProfile);