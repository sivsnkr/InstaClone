import {ADD_POST,REMOVE_POST} from "../actionTypes";
import {apiCall} from "../../services/api";
import {addError,removeError} from "./error";
export const addPost = function(posts){
    return {
        type: ADD_POST,
        posts
    }
}

export const removePost = function(id){
    return{
        type: REMOVE_POST,
        id
    }
}

export const fetchPosts = function(id){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("get",`/api/user/${id}/post`)
                    .then(res=>{
                        dispatch(addPost(res.posts));
                        dispatch(removeError());
                        return resolve(res.posts);
                    }).catch(err=>{
                        dispatch(addError(err));
                        return reject(err);
                    })
            })
    }
}

export const addNewPost = function(id,data){
    return dispatch=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/user/${id}/post`,data)
                    .then(res=>{
                        dispatch(addPost(res));
                        dispatch(removeError());
                        return resolve(res);
                    }).catch(err=>{
                        dispatch(addError(err));
                        return reject(err);
                    })
            })
    }
}
