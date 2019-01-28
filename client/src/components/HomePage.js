import React from "react";
import PostTime from "../containers/postsTime";
import UserProfile from "../containers/userProfile";
export const HomePage = function(props){
    const {isAuthenticated} = props;
    return(
        <div className="HomePage">
            <div className="post_body">
                <h1>All the Post will be here</h1>
                {isAuthenticated&&
                    <PostTime/>
                }
            </div>
            <div className="profile">
                <h1>All the Profile related information will be here</h1>
                {isAuthenticated&&
                    <UserProfile/>
                }
            </div>
        </div>
    )
}