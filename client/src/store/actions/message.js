import {apiCall} from "../../services/api";

export const addMessage = function(id,data){
    return ()=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/user/${id}/new_message`,data);
        })
    }
}