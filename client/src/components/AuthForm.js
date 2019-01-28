import React,{Component} from "react";
export class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password: "",
            email: "",
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
        })
    }
    render(){
        const {heading} = this.props;
        const{email,password,username} = this.state;
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
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={username}  onChange={this.handleChange} id="username" placeholder="Enter Username"/>
                        </div>
                    }
                    <button type="submit" className="btn btn-success btn-block">{heading}</button>
                </form>
            </div>
        )
    }
}