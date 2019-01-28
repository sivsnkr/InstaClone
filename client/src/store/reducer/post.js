import {ADD_POST,REMOVE_POST} from "../actionTypes";
const defaultState =[]
export default (state=defaultState,action)=>{
    switch(action.type){
        case ADD_POST:
            const post = action.posts.map(post=>{
                return{
                    id: post._id,
                    url: post.url,
                    likes:post.likes.length,
                    comments:post.comments.length,
                }
            })
            return [...state,...post];
        case REMOVE_POST:
            return state.filter(post=>post.id!==action.id);
        default:
            return state;
    }
}