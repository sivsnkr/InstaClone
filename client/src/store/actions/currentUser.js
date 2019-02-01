import {ADD_USER,REMOVE_USER} from '../actionTypes';
import {addError,removeError} from "./error";
import {apiCall} from "../../services/api";
import {setTokenHeader} from "../../services/api";
import {store} from "../../containers/App";
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

export const logout = function(){
    store.dispatch(removeUser());
    localStorage.clear();
    setTokenHeader();
}

export const FetchAllUsers = function(){
    const id = store.getState().user.userDetail._id;
    return new Promise((resolve,reject)=>{
        return apiCall("get",`/api/user/${id}`)
        .then(res=>{
            return resolve(res.users);
        })
    })
}

export const handle_followAnd_unfollow = function(type,id,f_id){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('get',`/api/user/${id}/${type}/${f_id}`)
                    .then(res=>{
                        dispatch(addUser(res));
                        dispatch(removeError());
                        return resolve(res);
                    }).catch(err=>{
                        dispatch(addError(err));
                        return reject(err);
                    })
        })
    }
}

export const Authenticate = function(type,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall('post',`/api/user/${type}`,data)
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