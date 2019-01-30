import React,{Component} from "react";

export class RenderSentMessages extends Component{
    render(){
        const {sentTo,body} = this.props;
        return(
            <div className="single-message">
                <div className="sent-to">
                    Sent To <h4>{sentTo}</h4>
                </div>
                <div className="single-message-body">
                    {body}
                </div>
            </div>
        )
    }
}