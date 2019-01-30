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
                isAuthenticated: !!Object.keys(action.userData),
                userDetail:action.userData,
            }
        case REMOVE_USER:
            return defaultState;
        default:
            return state;
    }
}