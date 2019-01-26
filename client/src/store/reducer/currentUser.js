import {ADD_USER,REMOVE_USER} from "../actionTypes";
const defaultState = {
    isAuthenticated: false,
    userDetail:{}
};

export default (state=defaultState,action)=>{
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.user),
                userDetail:action.user,
            }
        case REMOVE_USER:
            return defaultState;
        default:
            return state;
    }
}