import React,{Component} from "react";

export class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            url:"",
            caption:""
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
        const {url,caption} = this.state;
        return(
            <div className="AuthForm">
                <h1>New Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="url">Url</label>
                        <input type="text" className="form-control" name="url" vlaue={url} onChange={this.handleChange} id="url" placeholder="Paste Your Post URL here" size="50"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="caption">Caption</label>
                        <input type="text" className="form-control" name="caption" vlaue={caption} onChange={this.handleChange} id="caption" placeholder="Enter Caption"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                </form>
            </div>
        )
    }
}