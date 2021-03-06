import React,{Component} from "react";
export class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password: "",
            email: "",
            profilePic:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let type = this.props.heading === "Sign Up"?"signup":"signin";
        this.props.Authenticate(type,this.state)
        .then((res)=>{
            this.props.history.push("/");
            this.props.fetchPosts(res._id);
        })
    }
    render(){
        const {heading} = this.props;
        const{email,password,username,profilePic} = this.state;
        return(
            <div className="AuthForm">
                <h1>{heading}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" vlaue={email} onChange={this.handleChange} id="email" placeholder="Enter Email" size="50"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" vlaue={password} onChange={this.handleChange} id="password" placeholder="Enter Password"/>
                    </div>
                    {heading==="Sign Up"&&
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={username}  onChange={this.handleChange} id="username" placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profilePic">Profile Image</label>
                                <input type="text" className="form-control" name="profilePic" value={profilePic}  onChange={this.handleChange} id="profilePic" placeholder="Paste Link of Your Profile Picture"/>
                            </div>
                        </div>
                    }
                    <button type="submit" className="btn btn-success btn-block">{heading}</button>
                </form>
            </div>
        )
    }
}