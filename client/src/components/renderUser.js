import React from "react";

export const RenderUser = function(props){
    const {username,id,_id,following,handleClick} = props
    return(
        <div className="single-user">
                    <h2>{username}</h2>
                    {
                        following.indexOf(id) >= 0?(
                            <button onClick={(e)=>handleClick(e,_id)} className="btn btn-danger" name="unfollow" value={id}>Unfollow</button>
                        ):(<button onClick={(e)=>handleClick(e,_id)} name="follow" className="btn btn-success" value={id}>Follow</button>)
                    }
                </div>
    )
}