import {FETCH_POST,ADD_POST,REMOVE_POST} from "../actionTypes";
const defaultState =[]
export default (state=defaultState,action)=>{
    switch(action.type){
        case FETCH_POST:
            return [...action.posts];
        case ADD_POST:
            return [...state,action.post];
        case REMOVE_POST:
            return state.filter(post=>post.id!==action.id);
        default:
            return state;
    }
}