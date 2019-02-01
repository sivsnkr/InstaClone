import React,{Component} from "react";

export class RenderSentMessages extends Component{
    render(){
        const {Form,body,what} = this.props;
        return(
            <div className="single-message">
                <div className="sent-to">
                    {what} <strong>{Form}</strong>
                </div>
                <hr></hr>
                <div className="single-message-body">
                    {body}
                </div>
            </div>
        )
    }
}