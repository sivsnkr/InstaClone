import React ,{Component} from "react";
import {fetchSentMessages} from "../store/actions/message";
import {RenderSentMessages} from "./renderSentMessages";
export class SentMessages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        }
    }
    render(){
        fetchSentMessages()().then(res=>{
            this.setState({messages:res.messages})
        });
        let messages = this.state.messages.map(message=><RenderSentMessages
            key={message._id}
            sentTo={message.sentTo}
            body={message.body}
            />)
        return(
            <div className="all-messages">
                {messages}
            </div>
        )
    }
}