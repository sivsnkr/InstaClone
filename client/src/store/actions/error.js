import {ADD_ERROR,REMOVE_ERROR} from "../actionTypes";

export const addError = function(error){
    return {
        type: ADD_ERROR,
        message: error,
    }
}

export const removeError = function(){
    return {
        type: REMOVE_ERROR,
    }
}