import React,{Component} from "react";
import {fetchRecivedMessages} from "../store/actions/message";
import {RenderSentMessages} from "./renderSentMessages";

export class RecivedMessages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        }
    }
    render(){
        fetchRecivedMessages()().then(res=>{
            this.setState({messages:res.messages});
        });
        let messages = this.state.messages.map(message=><RenderSentMessages
            key={message._id}
            Form={message.recivedFrom}
            body={message.body}
            what="Recived From "
            />)
        return(
            <div className="all-messages">
                {messages}
            </div>
        )
    }
}