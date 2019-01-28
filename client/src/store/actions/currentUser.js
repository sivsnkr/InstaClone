import {ADD_USER,REMOVE_USER} from '../actionTypes';
import {addError,removeError} from "./error";
import {apiCall} from "../../services/api";
import {setTokenHeader} from "../../services/api";

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

export const Authenticate = function(type,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('post',`http://localhost:3001/api/user/${type}`,data)
                .then(res=>{
                    dispatch(addUser(res));
                    localStorage.setItem("jwtToken",res.token);
                    setTokenHeader(res.token);
                    dispatch(removeError());
                    return resolve(res);
                }).catch(err=>{
                    //this will add error
                    dispatch(addError(err));
                    return reject(err);
                })
        })
    }
}