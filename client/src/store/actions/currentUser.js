import {ADD_USER,REMOVE_USER} from '../actionTypes';
import {apiCall} from "../../services/api";

export const addUser = function(data){
    return {
        type:ADD_USER,
        userData:data,
    }
}

export const removeUser = function(){
    return {
        type:REMOVE_USER,
    }
}

//export const signup = 