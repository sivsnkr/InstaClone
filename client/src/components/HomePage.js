import React from "react";
import PostTime from "../containers/postsTime";
export const HomePage = function(props){
    const {isAuthenticated} = props;
    return(
        <div className="HomePage">
            <div className="post_body">
                {isAuthenticated&&
                    <PostTime/>
                }
            </div>
        </div>
    )
}