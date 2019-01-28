import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../Images/instagram-logo.png";

export const Navbar = function(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="instagram Logo" style={{width:"24px",height:"24px",margin:"4px"}}></img>
            <Link to="/" className="navbar-brand">Instagram</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/signup"style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin"style={{color:"#808080",marginRight:"20px",textDecoration:"none"}}>Log In</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
const mapStateToProps = function(state){
    return{
        //some state will be here
    }
}

export default connect(mapStateToProps,null)(Navbar);