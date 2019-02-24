import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../Images/instagram-logo.png";
import {logout} from "../store/actions/currentUser";
import instanav_logo from "../Images/instanav_logo.png";
export const Navbar = function(props){
    const {isAuthenticated} = props;
    return (
        <div class="navbar-personal">
            <div class="navbar-logo">
                <img style={{width:"30px",height: "30px"}}src={logo}></img>
            </div>
            <div className="insta-header"><Link style={{textDecoration:"none",color:"black"}}to="/">Instagram</Link></div>
            <input className="navbar-search" type="text" placeholder="Search"></input>
            <div className="other-menu-items">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <img src={logo} alt="instagram Logo" style={{width:"24px",height:"24px",margin:"4px"}}></img>
        //     <Link to="/" className="navbar-brand">Instagram</Link>
        //     <div className="collapse navbar-collapse">
        //         {isAuthenticated?(
        //         <ul className="navbar-nav mr-auto">
        //             <li className="nav-item">
        //                 <Link to="/sent_messages" style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Sent Messages</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/recived_messages" style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Recived Messages</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/new_message" style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>New Message</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/new_post"style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>New Post</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/all_users" style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>All Users</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/" onClick={()=>logout()} style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Log Out</Link>
        //             </li>
        //         </ul>):(
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item">
        //                     <Link to="/signup"style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Sign Up</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/signin"style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Log In</Link>
        //                 </li>
        //             </ul>
        //             )
        //         }
        //         <form className="form-inline my-2 my-lg-0">
        //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //         </form>
        //     </div>
        // </nav>
    )
}
const mapStateToProps = function(state){
    return{
        isAuthenticated: state.user.isAuthenticated,
    }
}

export default connect(mapStateToProps,null)(Navbar);