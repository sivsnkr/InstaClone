import {ADD_POST,REMOVE_POST} from "../actionTypes";
import {apiCall} from "../../services/api";
import {addError,removeError} from "./error";
export const addPost = function(posts){
    return {
        type: ADD_POST,
        posts
    }
}

export const REMOVE_POST = function(id){
    return{
        type: REMOVE_POST,
        id
    }
}

export const fetchPosts = function(id){
    return new Promise((resolve,reject)=>{
        return dispatch=>{
            return apiCall("get",`/api/user/${id}/`)
                    .then(res=>{
                        dispatch(addPost(res.posts));
                        dispatch(removeError());
                        return resolve(res.posts);
                    }).catch(err=>{
                        return reject(err);
                    })
        }
    })
}
