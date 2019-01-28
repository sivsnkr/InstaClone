import {ADD_POST,REMOVE_POST} from "../actionTypes";
import {apiCall} from "../../services/api";
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

// export const fetchPosts = function(id){
//     return new Promise((resolve,reject)=>{
//         return dispatch=>{
//             return apiCall("post",`http://lo`)
//         }
//     })
// }
