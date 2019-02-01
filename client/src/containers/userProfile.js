import React,{Component} from "react";
import { connect } from 'react-redux';
import defaultProfile from "../Images/DefaultProfile.jpg";


class UserProfile extends Component{
    render(){
        const {username,followers,following,profilePic} = this.props.currentUser.userDetail;
        return(
            <div className="userProfile">
                <div><h2>{username}</h2></div>
                <img className="userProfile" src={profilePic||defaultProfile} alt={username}></img>
                <div className="userProfile-body">
                    <div><strong>Followers:</strong> {followers}</div>
                    <div><strong>Following:</strong> {following}</div>
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