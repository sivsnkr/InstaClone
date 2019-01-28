import {ADD_POST,REMOVE_POST} from "../actionTypes";
const defaultState =[{
    id:null,
    url:null,
    likes:0,
    comemnts:0
}]
export default (state=defaultState,action)=>{
    switch(action.types){
        case ADD_POST:
            const posts = action.posts.map(post=>{
                return{
                    id: post._id,
                    url: post.url,
                    likes:post.likes,
                    comments:post.comments,
                }
            })
            return [...state,...posts];
        case REMOVE_POST:
            return state.filter(post=>post.id!==action.id);
        default:
            return state;
    }
}