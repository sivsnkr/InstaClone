import React,{Component} from "react";
import {fetchAllUsers} from "../store/actions/currentUser";
export class AllUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            AllUsers:[],
        }
    }
    render(){
        fetchAllUsers();
        return{

        }
    }
}