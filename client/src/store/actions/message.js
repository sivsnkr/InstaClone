import {apiCall} from "../../services/api";
import {addError,removeError} from "../actions/error";
import {store} from "../../containers/App";
export const addMessage = function(id,data){
    return ()=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/user/${id}/new_message`,data)
            .then(res=>{
                store.dispatch(removeError());
            }).catch(err=>{
                store.dispatch(addError());
            })
        })
    }
}