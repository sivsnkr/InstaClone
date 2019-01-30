import {apiCall} from "../../services/api";
import {addError,removeError} from "../actions/error";
import {store} from "../../containers/App";
export const addMessage = function(id,data){
    return ()=>{
        return new Promise((resolve,reject)=>{
            return apiCall("post",`/api/user/${id}/message`,data)
            .then(res=>{
                store.dispatch(removeError());
            }).catch(err=>{
                store.dispatch(addError());
            })
        })
    }
}

export const fetchSentMessages = function(){
    let id = store.getState().user.userDetail._id;
    return ()=>{
        return new Promise((resolve,reject)=>{
            return apiCall('get',`/api/user/${id}/message/sentMessages`)
                    .then(res=>{
                        store.dispatch(removeError());
                        return resolve(res);
                    }).catch(err=>{
                        store.dispatch(addError(err));
                        return reject(err);
                    })
        })
    }
}

export const fetchRecivedMessages = function(){
    let id = store.getState().user.userDetail._id;
    return ()=>{
        return new Promise((resolve,reject)=>{
            return apiCall('get',`/api/user/${id}/message/RecivedMessages`)
                    .then(res=>{
                        store.dispatch(removeError());
                        return resolve(res);
                    }).catch(err=>{
                        store.dispatch(addError(err));
                        return reject(err);
                    })
        })
    }
}