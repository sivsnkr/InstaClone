import {ADD_POST,REMOVE_POST, FETCH_POST} from "../actionTypes";
import {apiCall} from "../../services/api";
import {addError,removeError} from "./error";
export const addPost = function(post){
    return {
        type: ADD_POST,
        post
    }
}
export const fetchPost = function(posts){
    return {
        type: FETCH_POST,
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
                        dispatch(fetchPost(res.posts));
                        dispatch(removeError());
                        return resolve(res.posts);
                    }).catch(err=>{
                        dispatch(addError(err));
                        return reject(err);
                    })
            })
    }
}
export const deletePost = function(id,p_id){
    return dispatch=>{
        return apiCall("delete",`/api/user/${id}/post/${p_id}/delete`).then(res=>{
            dispatch(removePost(p_id));
            dispatch(removeError());
        }).catch(err=>{
            dispatch(addError(err));
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
