import {ADD_ERROR,REMOVE_ERROR} from "../actionTypes";
const defaultState = {
    message: null,
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case ADD_ERROR:
            return{
                ...state,
                message: action.message,
            }
        case REMOVE_ERROR:
            return defaultState;
        default:
            return state;
    }
}