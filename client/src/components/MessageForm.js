import React,{Component} from "react";

export class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:"",
            replicent: "",
        }
    }
    handleChange = e=>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    handleSubmit = e=>{
        e.preventDefault();
        //after submit function will run here
    }
    render(){
        const {message,replicent} = this.state;
        return(
            <div className="AuthForm">
                <h1>New Message</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="replicent">Replicent</label>
                        <input type="text" className="form-control" name="replicent" vlaue={replicent} onChange={this.handleChange} id="replicent" placeholder="Who do you want to message" size="50"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" className="form-control" name="message" vlaue={message} onChange={this.handleChange} id="message" placeholder="Type your Message Here" size="50"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }
}